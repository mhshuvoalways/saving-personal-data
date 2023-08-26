import React, { useEffect } from "react";
import FormInfo from "../components/form/FormInfo";
import Title from "../components/title";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-10/12 sm:w-[50.70%] mx-auto">
      <Title title=" 1. Personal Information" />
      <FormInfo />
    </div>
  );
};

export default Home;
