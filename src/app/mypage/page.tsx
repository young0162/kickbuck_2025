import Card from "@/components/Card";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import React from "react";

const Mypage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 my-14 max-w-[1024px] w-full">
      <PageTitle title="마이페이지" />
      <div className="w-full flex justify-end mb-6">
        <Link
          href={"/mypage/add"}
          className="px-2 py-3 bg-indigo-400 text-white rounded-sm text-[14px]"
        >
          버킷리스트 +
        </Link>
      </div>
      <div className="bg-indigo-100 rounded-sm px-8 py-6 w-full">
        <ul className="flex gap-4 p-4 mb-4">
          <li className="text-[14px]">나의 버킷리스트</li>
          <li className="text-[14px]">함께하는 버킷리스트</li>
          <li className="text-[14px]">대기중인 버킷리스트</li>
          <li className="text-[14px]">성공한 버킷리스트</li>
          <li className="text-[14px]">오프 버킷리스트</li>
          <li className="text-[14px]">공감한 버킷리스트</li>
        </ul>
        <Card />
      </div>
    </div>
  );
};

export default Mypage;
