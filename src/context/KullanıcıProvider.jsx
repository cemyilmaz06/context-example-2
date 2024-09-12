import React, { createContext, useEffect, useState } from 'react'

export const KullaniciContext=createContext()

const KullaniciProvider = ({children}) => {
const [user, setUser] = useState([])
useEffect(()=>{
    fetch("https://api.github.com/users")
.then((res)=>res.json())
.then((veri)=>setUser(veri))
},[])


const changeWidth=(id,widtH)=>{
    setUser(user.map((a)=>a.id===id ? {...a,width:widtH}: a))
}
  return (
  <KullaniciContext.Provider value={{user,changeWidth}}>
{children}
  </KullaniciContext.Provider>

   
  )
}

export default KullaniciProvider