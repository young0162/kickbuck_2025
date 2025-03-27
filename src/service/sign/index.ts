import { ILoginForm } from "@/types/sign";
import { kickbuckInstance } from "../instance";

export const sign = {
  emailLogin: async (loginForm: ILoginForm) => {
    const { data } = await kickbuckInstance.post<string>(
      `/auth/signin`,
      loginForm
    );

    return data;
  },
};
