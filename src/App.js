import './App.css';
import { useState } from "react";
import Header from './components/Header';
import Banner from './components/Banner';
import Container from './components/Container';

function App() {
  const [url, setUrl] = useState("");
  return (
    <div className="App">
      {/* déclarer url, setUrl */}
      <Header />
      <Banner />
      <Container />
    </div>
  );
}

export default App;
