import React, { useEffect } from "react";
import FormWhenWhere from "../components/form/FormWhenWhere";
import Title from "../components/title";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-10/12 sm:w-[66.50%] mx-auto">
      <Title title=" 3. Where & When" />
      <FormWhenWhere />
    </div>
  );
};

export default Home;
