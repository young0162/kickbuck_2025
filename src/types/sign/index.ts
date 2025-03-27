export interface ILoginForm {
  email: string;
  password: string;
}

export interface ISignUpForm {
  email: string;
  password: string;
  nickname: string;
  age?: number;
}
