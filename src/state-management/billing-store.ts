import { create } from 'zustand';
import { TProductBilling } from '../@types/product';
import { createJSONStorage, persist } from 'zustand/middleware';

type BillingState = {
    items: TProductBilling[];
    addItem: (item: TProductBilling) => void;
    removeItem: (itemId: number) => void;
    clearItems: () => void;
}

export const useBillingStore = create<BillingState>()(
    persist(
        (set, get) =>
        ({
            items: [],
            addItem: (item) => set((state) => {
                const { items } = state;
                const existingItem = items.find((i) => i.id === item.id);
                if (existingItem) {
                    return {
                        items: items.map((i) => {
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
                return { items: [...items, item] };
            }
            ),
            removeItem: (itemId) => set({ items: get().items?.filter((item) => item.id !== itemId) }),
            clearItems: () => set({ items: [] }),
        }),
        {
            name: 'billing-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

