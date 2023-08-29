import { create } from "zustand";

const categories = [
  {
    name: "poisson",
    subcategories: ["discus hybride", "discus sauvage", "autre espèce"],
  },
  {
    name: "nourriture",
    subcategories: ["granules", "flocons", "congele"],
  },
  {
    name: "matériel",
    subcategories: ["aquarium", "chauffage", "pompe a eau"],
  },
  {
    name: "traitement",
    subcategories: ["soin"],
  },
];

interface FilterBarStore {
  filter: string;
  setFilter: (filter: string) => void;
  categories: typeof categories;
  selectedCategory: string;
  setSelectedCategory: (categories: string) => void;
  position: "grid" | "column";
  setPosition: (position: "grid" | "column") => void;
}

export const useFilterBarStore = create<FilterBarStore>((set) => ({
  filter: "",
  position: "grid",
  categories,
  selectedCategory: "",

  setFilter: (filter) => set({ filter }),
  setPosition: (position) => set({ position }),
  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
}));
