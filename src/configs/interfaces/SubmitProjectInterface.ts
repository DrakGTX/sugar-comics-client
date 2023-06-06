export interface ISubmitProject {
    name: string;
    image?: File | null;
    author: string;
    description: string;
    story: string;
    video: string;
    estimated: number;
    rewards: { name: string; price: number; description: string; limited: boolean; limit: number }[];
}

export interface IProjectInfo {
    name: string;
    image?: File | null;
    author: string;
    description: string;
    story: string;
    video: string;
    estimated: number;
}

export interface IReward {
    name: string;
    price: number;
    description: string;
    limited: boolean;
    limit: number;
}
