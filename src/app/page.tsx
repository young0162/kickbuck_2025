"use client";

import Card from "@/components/Card";
import { bucket } from "@/service/bucket";
import { IMyBucketForm } from "@/types/bucket";
import { useEffect, useState } from "react";

export default function Main() {
  const { bucketAllList } = bucket;

  const [buckets, setBuckets] = useState<IMyBucketForm[]>([]);

  useEffect(() => {
    bucketAllList()
      .then((res) => {
        console.log(res);
        setBuckets(res);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }, []);

  // todo
  // 좋아요, 함께하기 db 따로 만들어서 버킷리스트 카드 아이디에 해당하는
  // 카운트들을 따로 관리해야 눌렀을때 바로바로 조회하는데 부담이 없을듯

  return (
    <div className="w-full p-6">
      <div className="flex gap-4">
        {buckets?.map((item) => {
          return <Card key={item?.id} cardData={item} />;
        })}
      </div>
    </div>
  );
}
