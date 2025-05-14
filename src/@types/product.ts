import { TStringLng } from "./language";

export type TProduct = {
    id: number;
    name: TStringLng;
    price: number;
    imageUrl: string;
};

export type TProductBilling = TProduct & {
    quantity: number;
};