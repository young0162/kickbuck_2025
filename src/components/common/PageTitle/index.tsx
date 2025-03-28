import React from "react";

interface IProps {
  title: string;
}

const PageTitle = ({ title }: IProps) => {
  return <h1 className="mb-6 text-2xl">{title}</h1>;
};

export default PageTitle;
