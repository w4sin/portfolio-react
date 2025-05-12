export type TProduct = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
};

export type TProductBilling = TProduct & {
    quantity: number;
};