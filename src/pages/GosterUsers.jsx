import React from 'react'
import Baslik from '../components/Baslik'
import Isimler from '../components/Isimler'

const GosterUsers = () => {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>GÖSTER USERS SAYFASI</h1>
        <Baslik/>
        <Isimler/>
    </div>
  )
}

export default GosterUsers