import React, { useContext } from 'react'
import { Cointext } from '../../Context/Cointext';
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {

  const {setcurrency} = useContext(Cointext);

  const handleselect = (e) => {
    switch(e.target.value) {
      case "usd" :{
        setcurrency({
          name:"usd",
          sign:"$"
        })
        break;
      }
      case "eur" :{
        setcurrency({
          name:"eur",
          sign:"€"
        })
        break;
      }
      case "inr" :{
        setcurrency({
          name : "inr",
          sign : "₹"
        })
        break;
      }
      default : {
        setcurrency({
          name:"usd",
          sign:"$"
        })
        break;
      }
    }
  }

  return (
    <div className='main'>
      <Link style={{textDecoration:"none", color:"white"}} to='/'>
        <h1>Crypto-Tracker</h1>
      </Link>
        <ul>
        <Link style={{textDecoration:"none", color:"white"}} to='/'>
            <li>Home</li>
            </Link>
            <li>Features</li>
            <li>Trends</li>
            <li>About</li>
        </ul>
        <div className="select">

        <select onChange={handleselect}>
            <option value="usd">usd</option>
            <option value="eur">eur</option>
            <option value="inr">inr</option>
        </select>
        <button>Sign Up</button>
        
        </div>
    </div>
  )
}

export default Nav
