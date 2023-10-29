import "./App.css";
import Info from "./components/Info/Info";
import MainView from "./components/MainView";
import TopBar from "./components/TopBar";
import { TemplateProvider } from "./contexts/TemplateContext";

function App() {
  return (
    <TemplateProvider>
      <Info />
      <div className="wrapper">
        <TopBar />
        <MainView />
      </div>
    </TemplateProvider>
  );
}

export default App;
