"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EnterBox = () => {
  const [id, setId] = useState("");
  const [password, setPassWord] = useState("");
  const router = useRouter();

  const onChangeId = (value: string) => {
    setId(value);
  };

  const onChangePw = (value: string) => {
    setPassWord(value);
  };

  const onClickLogin = () => {
    if (id === "wkdehdud3" && password === "0162") {
      localStorage.setItem("user", "true");
      router.push("/");
    } else alert("아이디와 비밀번호가 맞지않아요!");
  };

  return (
    <div className="flex flex-col border border-gray-400 p-12 rounded-[8px]">
      <div className="flex flex-col border border-gray-300 rounded-[8px]">
        <div className="border-b border-gray-300 px-4 py-4">
          <input
            className="outline-0 w-full"
            type="text"
            placeholder="아이디"
            onChange={(e) => onChangeId(e.target.value)}
          />
        </div>
        <div className="px-4 py-4">
          <input
            className="outline-0 w-full"
            type="password"
            placeholder="비밀번호"
            onChange={(e) => onChangePw(e.target.value)}
          />
        </div>
      </div>

      <button
        className={`h-[50px] mt-6 rounded-[8px] block cursor-pointer ${
          id.length > 0 && password.length > 0
            ? "bg-indigo-600 text-white"
            : "bg-gray-300 text-gray-600"
        }  `}
        type="button"
        onClick={onClickLogin}
      >
        로그인
      </button>
    </div>
  );
};

export default EnterBox;
