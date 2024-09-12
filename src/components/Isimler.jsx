import React, { useContext } from 'react'
import { KullaniciContext } from '../context/KullanıcıProvider'
import AnaUser from './AnaUser'

const Isimler = () => {
    const {user}=useContext(KullaniciContext)
  return (
    <div>

{user.slice(0,4).map((a)=>(
  <div key={a.id} style={{textAlign:"center", background:"pink"}}>

{a.login.toUpperCase()}

  </div>
)) }
<AnaUser/>
    </div>
  )
}

export default Isimler