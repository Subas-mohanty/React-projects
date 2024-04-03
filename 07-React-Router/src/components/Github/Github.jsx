import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("https://api.github.com/users/subas-mohanty").then(async (res)=>{
      const data = await res.json();
      setData(data);
      console.log(data);
    })
  }, [])
  
  const followers = data.followers;
  return (
    <div  className='bg-gray-600 text-white text-center p-3 m-3 text-3xl'>Github Followers : {followers} 
    <img src={data.avatar_url} alt="Git avatar" width={200}/>
    </div>
  )
}

export default Github