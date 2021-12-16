import './banner.css';

const Banner = (props) => {
    const url1 = "https://api-allocine.herokuapp.com/api/movies/upcoming";
    const url2 = "https://api-allocine.herokuapp.com/api/movies/popular";
    const url3 = "https://api-allocine.herokuapp.com/api/movies/top_rated";

    return (
        <div id="banner">
            <div id="categories">
                <div onClick={() => {
                    const urlTest = url1 + '/?p=' + props.page;
                    console.log("1");
                    console.log(urlTest);
                    props.changeUrl(urlTest);
                    // props.changePage(4);
                }}>Films à venir</div>
                <div onClick={() => {
                    props.changeUrl(url2 + '/?p=' + props.page);
                    console.log("2");
                }}>Films récents</div>
                <div onClick={() => {
                    props.changeUrl(url3 + '/?p=' + props.page);
                    console.log("3");
                }}>Films les mieux notés</div>
            </div>
            <div id="pagination">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F6C600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </div>
                <div>Page {props.page}</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F6C600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </div>
            </div>
        </div>
    );
};

export default Banner;