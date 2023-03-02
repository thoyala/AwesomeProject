import React, { useState } from "react";
import { useEffect } from "react";
import UserTokenStorage from "../storage/UserTokenStorage";
const AuthContext = React.createContext({});

const AuthContextProvider = (props) => {
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(async()=>{
    let tk = await UserTokenStorage.readItem();
    setUserToken(tk);
  },[]);


  return (
    <AuthContext.Provider value={{userToken, setUserToken,user,setUser,loading, setLoading}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };