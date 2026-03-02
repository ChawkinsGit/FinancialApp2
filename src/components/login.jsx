import './login.css'
import { useNavigate } from 'react-router-dom'

function login() {
const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/home");
    };
    return(
        <>
            <form action="">
                <h2>Pick Up Where you left off </h2>
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <a class="signup-link" href="">Don't have an Account? Click here to get Started</a>
                <button onClick={handleLogin}>Login</button>
            </form>
        </>
    )

}

export default login