import { TProduct } from "../../@types/product";

export const mockItems: TProduct[] = [
    {
        id: 1,
        name: { en: "Item 1Item 1Item 1Item 1Item 1 1Item 1Item 1Item 1", th: "ไอเทม 1ไอเทม 1ไอเทม 1ไอเทม 1ไอเทม 1ไอเทม 1ไอเทม 1ไอเทม 1" },
        price: 36,
        imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
        id: 2,
        name: { en: "Item 2", th: "ไอเทม 2" },
        price: 20,
        imageUrl: "",
    },
    {
        id: 3,
        name: { en: "Item 3", th: "ไอเทม 3" },
        price: 40,
        imageUrl: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    },
    {
        id: 4,
        name: { en: "Item 4", th: "ไอเทม 4" },
        price: 25,
        imageUrl: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    },
];