import { ILoginForm, ISignUpForm } from "@/types/sign";
import { kickbuckInstance } from "../instance";

export const sign = {
  emailLogin: async (loginForm: ILoginForm) => {
    const { data } = await kickbuckInstance.post<string>(
      `/auth/signin`,
      loginForm
    );

    return data;
  },

  emailSignUp: async (signUpForm: ISignUpForm) => {
    const { data } = await kickbuckInstance.post<string>(
      `/user/signup`,
      signUpForm
    );

    return data;
  },
};
