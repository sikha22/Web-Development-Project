import { Link } from "react-router-dom";
function About(){
    return(
        <div>
            <h1>About Page</h1>
            <p>This is About page of our Awesome App</p>
            <p>Welcome to our beautiful App</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    )

}
export default About;