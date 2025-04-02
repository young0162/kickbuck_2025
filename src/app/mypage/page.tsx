"use client";

import Card from "@/components/Card";
import PageTitle from "@/components/common/PageTitle";
import Tabs from "@/components/common/Tabs";
import { BUCKET_TYPES } from "@/constraint/bucketTypes";
import { bucket } from "@/service/bucket";
import { IMyBucketForm } from "@/types/bucket";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Mypage = () => {
  const { bucketMyList } = bucket;

  const [myBuckets, setMyBuckets] = useState<IMyBucketForm[]>([]);

  const getMyBucketList = (categoryNumber?: number) => {
    bucketMyList(4)
      .then((res) => {
        setMyBuckets(
          categoryNumber
            ? res?.filter((item) => item?.category === categoryNumber)
            : res
        );
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getMyBucketList();
  }, []);

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
      <div className="rounded-sm px-8 py-6 w-full">
        <Tabs items={BUCKET_TYPES} onClick={getMyBucketList} />
        <div className="flex gap-4">
          {myBuckets?.map((item) => {
            return <Card key={item?.id + item.title} cardData={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Mypage;
