import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Timer } from "./components/Timer";

function App() {
  return (
    <main
      className="text-primary-dark dark:text-primary w-full h-full max-sm:h-screen flex flex-col
    px-[45px] py-[30px]"
    >
      <Header />
      <Timer />
      <NavBar />
    </main>
  );
}

export default App;
