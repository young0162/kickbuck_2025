"use client";

import PageTitle from "@/components/common/PageTitle";
import { bucket } from "@/service/bucket";
import { IBucketAdd } from "@/types/bucket";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BucketAdd = () => {
  const [bucketAddForm, setBucketAddForm] = useState<IBucketAdd>({
    title: "",
    description: "",
    dday: "",
    rock: false,
    thumbnail: "",
    detail_image: "",
    hashtag: "",
    create_user: 4,
  });

  const { bucketAdd } = bucket;

  const router = useRouter();

  const onChangeAddForm = (
    key: keyof IBucketAdd,
    value: string | number | boolean
  ) => {
    setBucketAddForm((prev) => ({ ...prev, [key]: value }));
  };

  const actionBucketAdd = () => {
    bucketAdd(bucketAddForm)
      .then((res) => {
        console.log("res", res);
        alert("등록완료!");
        router.push("/");
        setBucketAddForm({
          title: "",
          description: "",
          dday: "",
          rock: false,
          thumbnail: "",
          detail_image: "",
          hashtag: "",
          create_user: 0,
        });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center py-12 my-14 max-w-[1024px] w-full">
      <PageTitle title="버킷리스트 등록하기" />

      <div className="mb-4">
        <h2 className="mb-2 text-sm">제목</h2>
        <input
          className="border border-gray-300 px-4 py-4 rounded-sm"
          type="text"
          placeholder="버킷리스트 제목"
          onChange={(e) => onChangeAddForm("title", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-sm">내용</h2>
        <input
          className="border border-gray-300 px-4 py-4 rounded-sm"
          type="text"
          placeholder="버킷리스트 내용"
          onChange={(e) => onChangeAddForm("description", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-sm">D-Day</h2>
        <input
          className="border border-gray-300 px-4 py-4 rounded-sm"
          type="text"
          placeholder="D-Day"
          onChange={(e) => onChangeAddForm("dday", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <h2 className="mb-2 text-sm">썸네일 이미지</h2>
        <input
          className="border border-gray-300 px-4 py-4 rounded-sm"
          type="text"
          placeholder="썸네일 이미지"
          onChange={(e) => onChangeAddForm("thumbnail", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-sm">상세 이미지</h2>
        <input
          className="border border-gray-300 px-4 py-4 rounded-sm"
          type="text"
          placeholder="상세 이미지"
          onChange={(e) => onChangeAddForm("detail_image", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-sm">해쉬태그</h2>
        <input
          className="border border-gray-300 px-4 py-4 rounded-sm"
          type="text"
          placeholder="해쉬태그"
          onChange={(e) => onChangeAddForm("hashtag", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-sm">공개여부</h2>
        <div>
          <label htmlFor="bucketShow">공개</label>
          <input
            id="bucketShow"
            type="radio"
            name="lock"
            onChange={(e) => onChangeAddForm("rock", true)}
          />
        </div>
        <div>
          <label htmlFor="bucketNo">비공개</label>
          <input
            id="bucketNo"
            name="lock"
            type="radio"
            onChange={(e) => onChangeAddForm("rock", false)}
          />
        </div>
      </div>
      <button
        className="px-2 py-3 bg-indigo-400 text-white rounded-sm text-[14px]"
        onClick={actionBucketAdd}
      >
        등록하기
      </button>
    </div>
  );
};

export default BucketAdd;
