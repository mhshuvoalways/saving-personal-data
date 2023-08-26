import React, { useEffect } from "react";
import FormProject from "../components/form/FormProject";
import Title from "../components/title";

const Home: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-10/12 sm:w-[66.50%] mx-auto">
      <Title title="2. CAS Project Information" />
      <FormProject />
    </div>
  );
};

export default Home;
