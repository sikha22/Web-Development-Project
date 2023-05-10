import { Link } from "react-router-dom";
function Home(){
    return(
        <div>
            <h1>Home Page</h1>
            <p>This is Home page of our Awesome App</p>
            <p>Welcome to our beautiful App</p>
            <Link to="/about">Go to About Page</Link>
        </div>
    )

}
export default Home;