import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <div className="home-title">{text}</div>;
};

export default Title;
