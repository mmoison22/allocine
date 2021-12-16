import './container.css';
import Card from './Card';

const Container = (props) => {
    // const [data, setData] = useState("");
    // const fetchData = async () => {
    //     const response = await axios.get(z.apiUrl);
    //     setData(response.data.results);
    // };
    // useEffect(() => {
    //     fetchData();
    // }, [z.apiUrl]);

    return (
        <div>
            {props.data
                ? props.data.map((film, i) => {
                    // ne pas oublier d'associer une key à chaque element, meme si ça semble ne pas nous etre utile, sinon react nous sort un warning
                    // i représente la position du film courant dans le tableau
                    console.log(film);
                    return <Card movie={film} />;
                    // return <div key={i}>{film.original_title}</div>;
                })
                : "EN ATTENTE"}
        </div>
    );
};

export default Container;