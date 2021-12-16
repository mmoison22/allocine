import './card.css';

const Card = (props) => {
    return (
        <div>
            <h2>
                {props.movie.original_title}

            </h2>
            {props.movie.release_date}
        </div>
    );
};

export default Card;