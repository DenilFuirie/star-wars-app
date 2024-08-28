import React, {ChangeEvent, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Input, Button, Typography} from 'antd';
import {useQuery} from "@tanstack/react-query";
import {getLocalCharacterData} from "../utils";
import {getCharacterApi} from "../api";
import {SpinPage} from "../components";

const { Title } = Typography;

const CharacterPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const localData = getLocalCharacterData(id);

    const { data: characterData } = useQuery({
        queryKey: ['getCharacter', id],
        queryFn: () => getCharacterApi(id).then((response) => {
            if (!formData) {
                setFormData(response);
            }

            return response;
        })
    })

    const [formData, setFormData] = useState(localData || characterData);

    const handleSave = () => {
        localStorage.setItem(`character-${id}`, JSON.stringify(formData));
        alert('Character saved locally!');
    };

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    if (!formData) {
        return <SpinPage />
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: 32, justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 600}}>
                <Title level={2}>Edit Character</Title>
                <>
                    {Object.entries(formData).map((item: [string, any]) => {
                        const [name, value] = item;
                        return (
                            <div key={name}>
                                <Typography>{name}</Typography>
                                <Input
                                    name={name}
                                    value={value}
                                    onChange={onChangeInput}
                                    style={{marginBottom: '20px'}}
                                />
                            </div>
                        )
                        })}
                </>
                <Button type="primary" onClick={handleSave}>Save</Button>
            </div>
        </div>
    );
};

export default CharacterPage;
