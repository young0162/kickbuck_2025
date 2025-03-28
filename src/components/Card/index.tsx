import React from "react";

const Card = () => {
  return (
    <div className="w-1/5 flex flex-col p-2 bg-white">
      <div className="flex justify-center py-4 text-2xl my-4">제목</div>
      <div className="flex justify-between">
        <button type="button" className="w-1/2 flex justify-center text-[14px]">
          버튼1
        </button>
        <button type="button" className="w-1/2 flex justify-center text-[14px]">
          버튼2
        </button>
      </div>
    </div>
  );
};

export default Card;
