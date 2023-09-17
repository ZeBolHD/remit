import { IconContext } from "react-icons";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Timer } from "./components/Timer";

function App() {
  return (
    <main
      className="text-primary-dark  dark:text-primary w-full h-full flex flex-col
    px-[45px] py-[30px] m-0"
    >
      <Header />
      <IconContext.Provider
        value={{
          size: "35px",
          className: "dark:stroke-primary stroke-primary-dark",
        }}
      >
        <Timer />
        <NavBar />
      </IconContext.Provider>
    </main>
  );
}

export default App;
