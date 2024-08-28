import React from 'react';
import { Card, Row, Col } from 'antd';
import { Character } from "../types";
import {InfoItem} from "./InfoItem";

interface CharacterCardProps {
    character: Character;
    isLoading: boolean;
}

export const CharacterCard = (props: CharacterCardProps) => {
    const { character, isLoading } = props;
    const { name} = character;

    return (
        <Card title={name} bordered={false} style={{ marginBottom: 16 }} loading={isLoading}>
            <Row gutter={16}>
                <Col span={24}>
                    {Object.entries(character).map((item) => {
                        const [name, value] = item;

                        return <InfoItem key={name} label={name} value={value} />
                    })}
                </Col>
            </Row>
        </Card>
    );
};
