import '../App.css'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        // later: validate credentials
        navigate("/account");
    };
  return (
    <> 
    <header>
      <h1 id='main'>Your Wealth DNA
        <div>
        <button onClick={handleSignIn}>Create Portforlio</button>
        or
        <button>Login</button>
      </div>
      </h1>
    </header>
    
  <nav>
      <picture></picture>
      <ul>
        <h2>Personal</h2>
        <li>Assets</li>
        <li>Liabilities</li>
        <li>Income</li>
        <li>Expenses</li>
        <h2>Business</h2>
        <li>Balance Sheet</li>
        <li>Income Statement</li>
        <li>Cash Flow</li>
        <li>Investment Portfolio</li>
      </ul>
    </nav>
    <main>
      <section><h1>Manage Personal Portfolio</h1></section>
      <button><div><h1>Get Started Here</h1></div></button>
      <section><h1>Manage Business Portfolio</h1></section>
    </main>
    </>
  )
}

export default Home