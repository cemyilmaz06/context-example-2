import React, { useContext } from "react";
import { KullaniciContext } from "../context/KullanıcıProvider";

const AnaUser = () => {
  const { user,changeWidth } = useContext(KullaniciContext);
  return (
    <div style={{ textAlign: "center" }}>
      {user.map((a) => (
        <div key={a.id}>
          <h3>{a.login} </h3>
          <img src={a.avatar_url} alt="" width={a.width ? a.width : "300px"}/>
          <div>
           <label>Image width (px)</label>
            <input type="number" onChange={(e)=>changeWidth(a.id, e.target.value)}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnaUser;
