import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./styles/components/app.sass";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div id="portfolio">
      <h1>
        <Typewriter
          onInit={(Typewriter) => {
            Typewriter.typeString("Olá, eu sou Filipe Araujo!").start();
          }}
        />
      </h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
