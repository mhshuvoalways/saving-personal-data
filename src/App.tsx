import { useSelector } from "react-redux";
import { RootState } from "./store";
import Routers from "./app/Routers";
import Helmet from "./app/Helmet";

const App: React.FC = () => {
  const forms = useSelector((state: RootState) => state.formFeature);
  console.log(forms);
  return (
    <div className="mt-[58.5px] mb-[52px]">
      <Routers />
      <Helmet />
    </div>
  );
};

export default App;
