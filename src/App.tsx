import { useSelector } from "react-redux";
import Routers from "./app/Routers";
import Helmet from "./app/Helmet";
import { RootState } from "./store";

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state);
  console.log(count);
  return (
    <div className="mt-[58.5px] mb-[52px]">
      <Routers />
      <Helmet />
    </div>
  );
};

export default App;
