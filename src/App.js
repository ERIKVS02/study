import './styles/App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
        <Header />
        <Content/>
        <Counter/>
    </div>
  );
}

export default App;
