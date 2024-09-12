import React, { useContext } from "react";
import { KullaniciContext } from "../context/KullanıcıProvider";

const AnaUser = () => {
  const { user,changeWidth } = useContext(KullaniciContext);
  return (
    <div style={{ textAlign: "center", display:"flex", flexWrap:"wrap",gap:"1rem"}}>
      {user.map((a) => (
        <div key={a.id}>
          <h3 style={{}}>{a.login.toUpperCase()} </h3>
          <img src={a.avatar_url} alt="" width={a.width ? a.width : "300px"}/>
          <div>
           <label>Image Width (Px)</label>:
            <input type="number" onChange={(e)=>changeWidth(a.id, e.target.value)}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnaUser;
