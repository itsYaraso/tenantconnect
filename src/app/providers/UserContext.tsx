import React, { createContext, SetStateAction, useContext, useState } from "react";

interface UserInfo {
  name: string;
  userName: string;
  userId: number;
  isLandlord: boolean;
  property?: string
  userType: string;
}

export const useUserContext = () => useContext(UserContext);

const UserContext = createContext<UserInfo>({} as UserInfo);



export function UserContextProvider(props: React.PropsWithChildren) {
  const value = {
  };

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
}