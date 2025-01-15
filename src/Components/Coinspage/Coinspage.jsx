import React, { useContext, useEffect, useState } from 'react'
import './Coinspage.css'
import { Cointext } from '../../Context/Cointext'
import { useParams, useSearchParams } from 'react-router-dom';
import Coingraph from '../Coingraph/Coingraph';

const Coinspage = () => {

  const { currency } = useContext(Cointext);
  const [choosedcoin, setchoosedcoin] = useState()
  const [graphdata, setgraphdata] = useState();
  const { coinsid } = useParams()

  const fetchcoins = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-Pvc7BpxaByZSfX9kEb1HTuhX	'
      }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinsid}`, options)
      .then(res => res.json())
      .then(res => setchoosedcoin(res))
      .catch(err => console.error(err));
  }

  const fetchcoingraph = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-Pvc7BpxaByZSfX9kEb1HTuhX	'
      }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinsid}/market_chart?vs_currency=${currency.name}&days=7&interval=daily`, options)
      .then(res => res.json())
      .then(res => setgraphdata(res))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchcoins();
    fetchcoingraph()
  }, [currency])

  if (choosedcoin, graphdata) {
    return (
      <div className='coinspage'>
        <img className='coinimg' src={choosedcoin?.image?.large} alt="" />
        <p className='choosecoin'>{choosedcoin?.name}{` - `}{choosedcoin?.symbol.toUpperCase()}</p>
        <Coingraph graphdata={graphdata} />
        <div className="coininfo">
          <p className='head'>CoinInfo :</p>
          <p>Market Cap Rank : {choosedcoin?.market_cap_rank}</p>
          <p>Current Market Price : {currency.sign}{choosedcoin?.market_data.current_price[currency.name].toLocaleString()}</p>
          <p>24 Hours High : {currency.sign}{choosedcoin?.market_data.high_24h[currency.name].toLocaleString()}</p>
          <p>24 Hours Low : {currency.sign}{choosedcoin?.market_data.low_24h[currency.name].toLocaleString()}</p>
          <p>Price Change 24 Hours : {currency.sign}{choosedcoin?.market_data.price_change_24h.toLocaleString()}</p>
          <a href={choosedcoin?.links.homepage} style={{ textDecoration: "none", }} target='blank'>Visit Official Website</a>
        </div>
      </div>
    )
  }
  else {
    return (
      <p className='load' style={{ color: "white" }}>Loading....</p>
    )
  }
}

export default Coinspage
