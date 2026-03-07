import styles from  './login.module.css'
import { useNavigate } from 'react-router-dom'

function login() {
const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/home");
    };
    return(
        <div className={styles.page}>
            <form className={styles.form}>
            <h2 className={styles.title}>Pick Up Where you left off</h2>

            <input className={styles.input} type="text" placeholder="Username" />
            <input className={styles.input} type="text" placeholder="Password" />

            <a className={styles.signupLink} href="">
                Don't have an Account? Click here to get Started
            </a>

            <button className={styles.loginButton} onClick={handleLogin}>
                Login
            </button>
            </form>
        </div>
    )

}

export default login