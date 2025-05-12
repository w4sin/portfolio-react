import { create } from 'zustand';
import { TProductBilling } from '../types/product';

type BillingState = {
    items: TProductBilling[];
    addItem: (item: TProductBilling) => void;
    removeItem: (itemId: number) => void;
    clearItems: () => void;
}

export const useBillingStore = create<BillingState>()((set) => ({
    items: [],
    addItem: (item) => set((state) => {
        const existingItem = state.items.find((i) => i.id === item.id);
        if (existingItem) {
            return {
                items: state.items.map((i) => {
                    if (i.id === item.id) {
                        if (i.quantity + item.quantity <= 0)
                            return { ...i, quantity: 0 };
                        if (i.quantity + item.quantity > 99)
                            return { ...i, quantity: 99 };
                        return { ...i, quantity: i.quantity + item.quantity };
                    } else
                        return i;
                }
                ),
            };
        }
        return { items: [...state.items, item] };
    }
    ),
    removeItem: (itemId) => set((state) => ({ items: state.items.filter((item) => item.id !== itemId) })),
    clearItems: () => set({ items: [] }),
}));