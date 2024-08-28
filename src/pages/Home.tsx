import React, {useState} from 'react';
import {Col, Row, Typography} from 'antd';
import {useQuery} from "@tanstack/react-query";
import {getCharactersApi} from "../api";
import {Pagination, SearchBar} from "../components";
import {CharacterList} from "../features";

const { Title } = Typography;
const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedInputValue, setDebouncedInputValue] = useState('')
    const [page, setPage] = useState(1);

    const filters = {
        searchTerm: debouncedInputValue,
        page
    }

    const { data, isLoading } = useQuery({
        queryKey: ['characters', { ...filters }],
        queryFn: () => getCharactersApi(filters),
    });

    const totalPages = data ? Math.ceil(data.count / 10) : 0;

    return (
        <div style={{ display: 'grid', gap: '32px' }}>
            <Row justify="center">
                <Col>
                    <Title level={2}>Star Wars Characters</Title>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={12}>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setDebouncedInputValue={setDebouncedInputValue} />
                </Col>
            </Row>
            <Row justify="center">
                <Col span={18}>
                    <CharacterList
                        characters={data?.results ?? []}
                        isLoading={isLoading}
                    />
                </Col>
            </Row>
            {totalPages > 1 && <Row justify="center">
                <Col>
                    <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
                </Col>
            </Row>}
        </div>
    );
};

export default Home;
