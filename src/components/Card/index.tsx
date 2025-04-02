import { IMyBucketForm } from "@/types/bucket";
import React from "react";

interface IProps {
  cardData: IMyBucketForm;
}

const Card = ({ cardData }: IProps) => {
  return (
    <div className="w-1/5 flex flex-col bg-indigo-100 rounded-sm">
      <div className="flex justify-center p-4 text-2xl my-4 h-24">
        {cardData?.title}
      </div>
      <div className="mb-6 px-4 text-sm">{cardData?.description}</div>
      <div className="flex justify-between border-t border-gray-400">
        <button
          type="button"
          className="w-1/2 flex justify-center text-sm border-r border-gray-400 h-10 items-center cursor-pointer"
        >
          좋아요
        </button>
        <button
          type="button"
          className="w-1/2 flex justify-center text-sm h-10 items-center cursor-pointer"
        >
          함께하기
        </button>
      </div>
    </div>
  );
};

export default Card;
