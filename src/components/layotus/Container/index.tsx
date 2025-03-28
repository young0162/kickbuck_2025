import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Container = ({ children }: IProps) => {
  return <div className="w-full flex justify-center">{children}</div>;
};

export default Container;
