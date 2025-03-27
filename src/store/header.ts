import { create } from "zustand";

interface ILoginStore {
  login: string;
  setLogin: (login: string) => void;
}

export const useLoginStore = create<ILoginStore>((set) => ({
  login: "false",
  setLogin: (login) => {
    set({ login });
  },
}));
