import {useState, useEffect} from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        ).then(async (res)=> {
            const data = await res.json();
            setData(data[currency]);
            // const currencyVal = data[currency];
            // console.log(data); // data is the currency array
        })
    }, [currency])
    return data;
}
export default useCurrencyInfo;