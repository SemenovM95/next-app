export interface IFilterOptions {
    sort: 'ASC' | 'DESC';
    filter: {
        name: string;
        value: string;
    };
}

export const defaultOptions: IFilterOptions = {
    sort: 'ASC',
    filter: {
        name: 'description',
        value: ''
    }
}