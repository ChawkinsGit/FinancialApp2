import styles from '../App.module.css'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/account");
    };
    const handleLogin = () => {
        navigate("/login");
    };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>
          Your Wealth DNA
          <div className={styles.headerButtons}>
            <button className={styles.button} onClick={handleSignUp}>
              Create Portfolio
            </button>
            or
            <button className={styles.button} onClick={handleLogin}>
              Login
            </button>
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