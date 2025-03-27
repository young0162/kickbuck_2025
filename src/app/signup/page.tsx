"use client";

import { sign } from "@/service/sign";
import { useLoginStore } from "@/store/header";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [nickName, setNickName] = useState("");
  const [age, setAge] = useState(0);

  const router = useRouter();

  const { emailSignUp } = sign;
  const { setLogin } = useLoginStore();

  const onClickSignUp = () => {
    emailSignUp({
      email: email,
      password: pw,
      nickname: nickName,
      age: age ?? 0,
    })
      .then((res) => {
        console.log("res", res);
        alert("가입해주셔서 감사합니다!");
        setLogin("true");
        localStorage.setItem("user", "true");
        router.push("/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <main className="flex flex-col justify-center items-center py-12 my-14">
      <h1 className="mb-6 text-2xl">회원가입</h1>
      <div className="max-w-[450px] w-full">
        <div className="flex flex-col border border-gray-400 p-12 rounded-[8px]">
          <div className="flex flex-col border border-gray-300 rounded-[8px]">
            <div className="border-b border-gray-300 px-4 py-4">
              <input
                className="outline-0 w-full"
                type="text"
                placeholder="이메일"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="border-b border-gray-300 px-4 py-4">
              <input
                className="outline-0 w-full"
                type="password"
                placeholder="비밀번호"
                required
                onChange={(e) => setPw(e.target.value)}
              />
            </div>
            <div className="border-b border-gray-300 px-4 py-4">
              <input
                className="outline-0 w-full"
                type="password"
                placeholder="비밀번호 확인"
                required
                onChange={(e) => setPwCheck(e.target.value)}
              />
            </div>
            <div className=" border-b border-gray-300 px-4 py-4">
              <input
                className="outline-0 w-full"
                type="text"
                placeholder="닉네임"
                onChange={(e) => setNickName(e.target.value)}
              />
            </div>
            <div className="px-4 py-4">
              <input
                className="outline-0 w-full"
                type="number"
                placeholder="나이"
                onChange={(e) => setAge(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className={`w-[450px] h-[50px] mt-8 rounded-[8px] block cursor-pointer ${"bg-indigo-600 text-white"}  `}
        type="button"
        onClick={onClickSignUp}
      >
        가입하기
      </button>
    </main>
  );
};

export default SignUp;
