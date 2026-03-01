import React from 'react'
import './account.css'
import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'

function Account() {
        const navigate = useNavigate();
        const handleBackToHome = () => {
            // later: validate credentials
            navigate("/home");
            
        };
        
    const [profileData, setProfileData] = useState({
    account: {
      userName: '',
      password: ''
    },
    personal: {
      name: "",
      age: "",
      email: "",
      monthlyIncome: "",
      savings: "",
      debt: "",
      assets: "",
      liabilities: ""
    },
    business: {
      name: "",
      revenue: "",
      expenses: "",
      profit: "",
      businessDebt: "",
      cashOnHand: "",
      industry: ""
    }
  });

    // Handle input changes
    function handleChange(e) {
    const { name, value, dataset } = e.target;
    const section = dataset.section; // "personal" or "business"

    setProfileData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value
      }
    }));
  }

    // Save profile to localStorage
    function handleSaveProfile() {
    const existingProfiles =
      JSON.parse(localStorage.getItem("profiles")) || [];
    const { userName, password } = profileData.account;

    if (!userName || !password) {
      alert("Username and password required");
      return;
    }
    const newProfile = {
      id: Date.now(),
      account: profileData.account, 
      personal: {
        ...profileData.personal,
        assets: profileData.personal.assets
          .split(",")
          .map(item => item.trim()),
        liabilities: profileData.personal.liabilities
          .split(",")
          .map(item => item.trim())
      },
      business: profileData.business
    };
    const registerResult = registerUser(userName, password, newProfile.id);

      if (!registerResult.success) {
        alert(registerResult.message);
        return;
      }
    const updatedProfiles = [...existingProfiles, newProfile];

    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
    }
      function getUsers() {
        return JSON.parse(localStorage.getItem("users")) || {};
      }

      // Save users object
      function saveUsers(users) {
        localStorage.setItem("users", JSON.stringify(users));
      }

      // Register user
      function registerUser(username, password, profileId) {
        const users = getUsers();

        if (users[username]) {
          return { success: false, message: "Username already exists" };
        }

        users[username] = {
          password,
          profileId
        };

        saveUsers(users);
        localStorage.setItem("currentUser", username);

        return { success: true };
      }
    return (
        <>
        <header>
            <h1>Creating Your Profile</h1>
        </header>
        <section>
            <h2>Personal Data</h2>
            <form>
                <input name="name" placeholder="Name" data-section="personal" onChange={handleChange} />
                <input name="age" placeholder="Age" data-section="personal" onChange={handleChange} />
                <input name="email" placeholder="Email" data-section="personal" onChange={handleChange} />
                <input name="monthlyIncome" placeholder="Monthly Income" data-section="personal" onChange={handleChange} />
                <input name="savings" placeholder="Savings" data-section="personal" onChange={handleChange} />
                <input name="debt" placeholder="Debt" data-section="personal" onChange={handleChange} />
                <input name="assets" placeholder="Assets (comma separated)" data-section="personal" onChange={handleChange} />
                <input name="liabilities" placeholder="Liabilities (comma separated)" data-section="personal" onChange={handleChange} />
            </form>
        </section>

        <section>
            <h2>Business Data</h2>
            <form>
                <input name="name" placeholder="Business Name" data-section="business" onChange={handleChange} />
                <input name="revenue" placeholder="Revenue" data-section="business" onChange={handleChange} />
                <input name="expenses" placeholder="Expenses" data-section="business" onChange={handleChange} />
                <input name="profit" placeholder="Profit" data-section="business" onChange={handleChange} />
                <input name="businessDebt" placeholder="Business Debt" data-section="business" onChange={handleChange} />
                <input name="cashOnHand" placeholder="Cash On Hand" data-section="business" onChange={handleChange} />
                <input name="industry" placeholder="Industry" data-section="business" onChange={handleChange} />
            </form>
            </section>
            <footer>
                <p>Username</p> 
                <input name='userName' placeholder='Username' data-section="account" onChange={handleChange}/>
                <p>Password</p>
                <input name='password' placeholder='Password' data-section="account" onChange={handleChange} />
                <button onClick={() => {
                    handleBackToHome();
                    handleSaveProfile();
                    }}
                >Save</button>
            </footer>
        </>
    )
    
}
export default Account