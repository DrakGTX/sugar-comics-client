export interface ICardData {
    id: number;
    name: string;
    author: string;
    description: string;
    startDate: Date;
    endDate: Date;
    estimated: number;
    accumulated: number;
}

export interface ICardImage {
    id: number;
    itemId: number;
    image: string;
}
