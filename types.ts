export interface Company {
    id: string;
    name: string;
    imageUrl: string;
};

export interface Employee {
    id: string;
    name: string;
    company: Company;
};