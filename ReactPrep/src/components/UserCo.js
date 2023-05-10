import { useParams } from "react-router-dom";

function UserCo(){
    const params = useParams();
    const {name} = params;
    console.log(name);
    return(
        <div>
            <h1>This is {name} page</h1>
        </div>
    )
}
export default UserCo;