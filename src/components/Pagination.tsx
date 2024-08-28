import React from 'react';
import { Pagination as AntPagination } from 'antd';
import {DEFAULT_PAGE_SIZE} from "../constants";

interface PaginationProps {
    page: number;
    totalPages: number;
    setPage: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
    const { page, totalPages, setPage } = props;

    return (
        <AntPagination
            current={page}
            total={totalPages * 10}
            pageSize={DEFAULT_PAGE_SIZE}
            onChange={setPage}
            showSizeChanger={false}
        />
    );
};
