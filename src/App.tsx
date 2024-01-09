import { Navbar } from "./Components/Navbar";
import "./styles/index.css";
import { MainRouter } from "./Routes/MainRouter";
export const App = () => {

  return (
    <>
      <Navbar />
      <MainRouter />
    </>
  );
};
