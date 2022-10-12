export interface Game {
    categories: Array<string>;
    name: string;
    image: string;
    id: string;
    jackpot?: any;
}

export interface Jackpot {
    amount: number;
    game: string;
}