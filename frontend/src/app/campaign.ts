import { Product } from './product';

export class Campaign {
    id: number;
    name: string;
    keywords: string;
    bid: number;
    fund: number;
    status: string;
    town: string;
    radius: number; 
    product: Product;
}