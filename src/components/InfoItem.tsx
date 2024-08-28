import React from "react";
import {Typography} from "antd";

interface InfoItemProps {
    label: string;
    value: string
}

export const InfoItem = (props: InfoItemProps) => {
    const { label, value } = props;

    return (
        <Typography.Paragraph>
        <strong>{label}:</strong> {value}
    </Typography.Paragraph>
    )
}

