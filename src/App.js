import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import Header from './components/Header';
import Banner from './components/Banner';
import Container from './components/Container';

function App() {
  const [url, setUrl] = useState("https://api-allocine.herokuapp.com/api/movies/upcoming");
  const [data, setData] = useState("");
  const [page, setPage] = useState(5);
  const fetchData = async () => {
    const response = await axios.get(url + '/?p=' + page);
    setData(response.data.results);
  };
  useEffect(() => {
    fetchData();
  }, [url, page]);
  return (
    <div className="App">
      <Header />
      <Banner changeUrl={(toto) => { setUrl(toto) }} page={page} changePage={(toto) => { setPage(toto) }} />
      <Container data={data} />
    </div>
  );
}

export default App;
