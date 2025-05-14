import { create } from "zustand";
import { TLng } from "../@types/language"
import { createJSONStorage, persist } from "zustand/middleware";

type configState = {
    lng: TLng;
    setLng: (lng: TLng) => void;
}

export const useConfigStore = create<configState>()(
    persist(
        (set) => ({
            lng: "en",
            setLng: (lng) => set({ lng }),
        }),
        {
            name: "config-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
)