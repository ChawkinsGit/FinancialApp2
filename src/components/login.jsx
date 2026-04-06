import { useState } from 'react';
import styles from  './login.module.css'
import { useNavigate } from 'react-router-dom'

function login() {
    const [formData, setFormData] = useState({userName: '', password: ''})

    const navigate = useNavigate();

   const handleLogin = (e) => {
        e.preventDefault();
        const { userName, password } = formData;

        if (!userName || !password) {
        alert("Enter username and password");
        return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || {};
        const profiles = JSON.parse(localStorage.getItem("profiles")) || [];

        if (!users[userName] || users[userName].password !== password) {
        alert("Invalid username or password");
        return;
        }

        // Login success
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", userName);

        // Optionally find the profile name
        const userProfile = profiles.find(p => p.account.userName === userName);
        localStorage.setItem("displayName", userProfile?.personal?.name || userName);

        navigate("/home");
    };
    
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };
    return(
        <div className={styles.page}>
            <form className={styles.form}>
            <h2 className={styles.title}>Pick Up Where you left off</h2>

            <input className={styles.input} name='userName' type="text" placeholder="Username" onChange={handleChange} />
            <input className={styles.input} name='password' type="text" placeholder="Password" onChange={handleChange} />

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