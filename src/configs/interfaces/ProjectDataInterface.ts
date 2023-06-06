export interface IProjectData {
    id: number;
    name: string;
    author: string;
    description: string;
    startDate: Date;
    endDate: Date;
    estimated: number;
    accumulated: number;
    story: string;
    rewards: { name: string; price: number; description: string; limited: boolean; limit: number | null }[];
}
