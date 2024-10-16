import { UUID } from "crypto";
import React, { createContext, SetStateAction, useContext, useState } from "react";

interface UserInfo {
  loginstatus: boolean
  setLoginStatus: React.Dispatch<React.SetStateAction<boolean>>
}

export const useUserContext = () => useContext(UserContext);

const [loginstatus, setLoginStatus] = useState(false)

const getLogin = () => {
    localStorage.getItem("LOGIN_STATUS")
}

const setLogin = () => {
    localStorage.setItem("LOGIN_STATUS", loginstatus.toString())
}

const UserContext = createContext<UserInfo>({} as UserInfo);



export function UserContextProvider(props: React.PropsWithChildren) {
  const value = {
    UserInfo
  };

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
}