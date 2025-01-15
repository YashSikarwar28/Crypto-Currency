import { createContext, useEffect, useState } from "react";

export const Cointext = createContext();

const CointextProvider = (props) => {
    const[coins,setcoins] = useState("");
    const[currency,setcurrency] = useState({
        name : "usd",
        sign : "$"
    })

    const coinrecord = () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-Pvc7BpxaByZSfX9kEb1HTuhX	'
            }
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setcoins(res))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        coinrecord();
    },[currency])

    const coinvalue = {
        coins,currency,setcurrency
    }

        return(
            <Cointext.Provider value={coinvalue}>
                    {props.children}
            </Cointext.Provider>
        )
}

export default CointextProvider;