import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import {Character} from "../../types";
import {CharacterCard} from "../../components";
import {getCharacterToDisplay, mockCharacters} from "./utils";

interface CharacterListProps {
    characters: Character[];
    isLoading: boolean;
}

export const CharacterList = (props: CharacterListProps) => {
    const { characters, isLoading } = props;

    const currentCharacters = isLoading ? mockCharacters : characters

    return (
        <Row gutter={[16, 16]}>
            {currentCharacters.map((character) => (
                <Col span={12} key={getCharacterToDisplay(character).id}>
                    <Link to={`/character/${getCharacterToDisplay(character).id}`}>
                        <CharacterCard character={getCharacterToDisplay(character)} isLoading={isLoading} />
                    </Link>
                </Col>
            ))}
        </Row>
    );
};
