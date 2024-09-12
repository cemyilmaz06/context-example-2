import React, { createContext, useEffect, useState } from 'react'

export const KullaniciContext=createContext()

const KullaniciProvider = ({children}) => {
const [user, setUser] = useState("")
useEffect(()=>{
    fetch("https://api.github.com/users")
.then((res)=>res.json())
.then((veri)=>setUser())
},[])


  return (
  <KullaniciContext.Provider value={{user}}>
{children}
  </KullaniciContext.Provider>

   
  )
}

export default KullaniciProvider