import React, { useContext, useEffect, useState } from 'react'
import './Homepage.css'
import { Cointext } from '../../Context/Cointext'
import { Link } from 'react-router-dom';

const Homepage = () => {
  const {coins,currency} = useContext(Cointext);
  const[currentcoin,setcurrentcoin] = useState([])
  const [search,setsearch] = useState('');

  const handleinput = (e) => {
    setsearch(e.target.value)
    if(e.target.value === ""){
      setcurrentcoin(coins)
    }
  }

  const handleform = async(e) => {
    e.preventDefault();
    const searchcoin = await coins.filter((item)=>{
      return item.name.toLowerCase().includes(search.toLowerCase());
    })
    setcurrentcoin(searchcoin)
  }

  useEffect(() => {
    if (Array.isArray(coins)) {
      setcurrentcoin(coins);
    } else {
      setcurrentcoin([]); 
    }
  }, [coins]);

  return (
    <div className='home'>

        <div className="intro">
      <h1>Your own <br/> Crypto Market Place</h1>
      <p>Welcome to the largext cryptocurrency marketplace. <br /> Sign up to explore more about cryptos</p>
      <form onSubmit={handleform} >
        <input value={search} onChange={handleinput} placeholder='Search your crypto...' type="text"/>
        <button>Search</button>
      </form>
        </div>

      <div className="cryptolayout">
        <p>#</p>
        <p >Coin</p>
        <p>Price</p>
        <p>24H Change</p>
        <p>Market Cap</p>
      </div>
      {currentcoin.slice(0,10).map((item,index)=>(
        <Link to={`/coins/${item.id}`} key={index} className="cryptolayout">
        <p>
          {item.market_cap_rank+"."}
        </p>
        <div className='image'>
          <img src={item.image} alt="" />
          <p>{item.name}</p>
        </div>
        <p>{currency.sign}{item.current_price.toLocaleString()}</p>
        <p className={ item.price_change_percentage_24h > 0 ? "positve" : "negative"}>{Math.floor(
        item.price_change_percentage_24h*100
      )/100}
      </p>
      <p>{currency.sign}{item.market_cap.toLocaleString()}</p>
        </Link>
      ))}
    </div>
  )
}

export default Homepage
