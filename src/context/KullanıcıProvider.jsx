import React, { createContext } from 'react'

export const KullaniciContext=createContext()

const KullaniciProvider = ({children}) => {
fetch("https://api.github.com/users")

  return (
  <KullaniciContext.Provider value={{}}>
{children}
  </KullaniciContext.Provider>

   
  )
}

export default KullaniciProvider