import { Header } from "./components/Header";
import { Timer } from "./components/Timer";

function App() {
  return (
    <main className="text-primary-dark dark:text-primary w-full h-full max-sm:h-screen flex flex-col">
      <Header />
      <Timer />
    </main>
  );
}

export default App;
