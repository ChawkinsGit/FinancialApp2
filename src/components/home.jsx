import styles from '../App.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const currentUser = localStorage.getItem("currentUser");

    setIsLoggedIn(loggedIn);

    if (loggedIn && currentUser) {
      // Get profiles
      const profiles = JSON.parse(localStorage.getItem("profiles")) || [];

      // Find matching profile
      const userProfile = profiles.find(
        (p) => p.account.userName === currentUser
      );

      if (userProfile) {
        setDisplayName(userProfile.personal.name || currentUser);
      }
    }
  }, []);

    const handleSignUp = () => {
        navigate("/account");
    };
    const handleLogin = () => {
        navigate("/login");
    };
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        setIsLoggedIn(false);
        setDisplayName("");
    };
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>
          Your Wealth DNA
          <div className={styles.headerButtons}>
            {!isLoggedIn ? (
              <>
                <button className={styles.button} onClick={handleSignUp}>
                  Create Portfolio
                </button>
                or
                <button className={styles.button} onClick={handleLogin}>
                  Login
                </button>
              </>
            ) : (
              <>
                <h2>Welcome, {displayName} </h2>
                <button className={styles.button} onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </h1>
      </header>

      <nav className={styles.nav}>
        <picture></picture>

        <ul className={styles.ul}>
          <h2>Personal</h2>
          <li className={styles.li}>Assets</li>
          <li className={styles.li}>Liabilities</li>
          <li className={styles.li}>Income</li>
          <li className={styles.li}>Expenses</li>

          <h2>Business</h2>
          <li className={styles.li}>Balance Sheet</li>
          <li className={styles.li}>Income Statement</li>
          <li className={styles.li}>Cash Flow</li>
          <li className={styles.li}>Investment Portfolio</li>
        </ul>
      </nav>

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Manage Personal Portfolio</h1>
        </section>

        <button className={styles.mainButton}>
          <div>
            <h1>Get Started Here</h1>
          </div>
        </button>

        <section className={styles.section}>
          <h1>Manage Business Portfolio</h1>
        </section>
      </main>
    </>
  )
}

export default Home