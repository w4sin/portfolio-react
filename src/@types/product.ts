import { LocalizedStrings } from "./language";

export type TProduct = {
    id: number;
    name: LocalizedStrings;
    price: number;
    imageUrl: string;
};

export type TProductBilling = TProduct & {
    quantity: number;
};