import Routers from "./app/Routers";
import Helmet from "./app/Helmet";

const App: React.FC = () => {
  return (
    <div className="mt-[58.5px] mb-[52px]">
      <Routers />
      <Helmet />
    </div>
  );
};

export default App;
