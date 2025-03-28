"use client";

import { useLoginStore } from "@/store/header";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState("false");

  const { login, setLogin } = useLoginStore();

  const onClickLogout = () => {
    localStorage.setItem("user", "false");
    setLogin("false");
    window.location.reload();
  };

  useEffect(() => {
    setUser(localStorage.getItem("user") ?? "");
    setLogin(localStorage.getItem("user") ?? "");
  }, [user]);

  useEffect(() => {
    setUser(login);
  }, [login]);

  return (
    <div className="flex-col">
      <div className="flex justify-end py-2 px-8 border-b border-b-gray-300">
        {user !== "true" ? (
          <Link className="text-[14px]" href={"/login"}>
            로그인
          </Link>
        ) : (
          <div className="flex gap-3">
            <Link className="text-[14px] cursor-pointer" href={"/mypage"}>
              마이페이지
            </Link>
            <button
              type="button"
              className="text-[14px] cursor-pointer"
              onClick={onClickLogout}
            >
              로그아웃
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-between px-8 py-4 border-b border-b-indigo-600">
        <div className="flex flex-1 justify-center">
          <Link className="text-2xl" href={"/"}>
            Tick Off
          </Link>
        </div>
        <div className="flex items-center">
          <span className="text-[14px]">메뉴</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
