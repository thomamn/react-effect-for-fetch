import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [art, setArt]=useState(null)
  //const[userData, setUserData]=useState(null)

  const [userData, setUserData] = useState({
    firstName: "",
    email:"",
    favouriteColour: "",
    profileImage: "",
  }); 
  
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/thomamn/contact')
    .then(res => res.json())
    .then(userData => setUserData(userData))
  }, []

  )
  

  return (
    <div className="main-layout">
      <ArtsSection />
      <UsersSection userData={userData}/>
      <AdviceSection />
    </div>
  )
}

export default App
