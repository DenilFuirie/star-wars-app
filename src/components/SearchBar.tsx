import React, {useEffect} from 'react';
import {Input} from "antd";
import {DEFAULT_TIMEOUT_MS} from "../constants";

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    setDebouncedInputValue: (term: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
    const { searchTerm, setSearchTerm, setDebouncedInputValue } = props;

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            setDebouncedInputValue(searchTerm);
        }, DEFAULT_TIMEOUT_MS);

        return () => clearTimeout(delayInputTimeoutId);
    }, [searchTerm]);

    return (
        <Input
            placeholder="Search characters"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: '20px' }}
        />
    );
};

