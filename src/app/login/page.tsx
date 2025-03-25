import EnterBox from "@/components/login/EnterBox";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 my-14">
      <div className="max-w-[450px] w-full">
        <EnterBox />
        <div className="mt-4 flex gap-3">
          <button type="button" className="text-[14px] text-gray-600">
            아이디 찾기
          </button>
          <button type="button" className="text-[14px] text-gray-600">
            비밀번호 찾기
          </button>
          <button type="button" className="text-[14px] text-gray-600">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
