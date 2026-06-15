import {
  createContext,
  useContext
} from "react";

import {
  useAuth
} from "./AuthContext";

const RoleContext =
  createContext();

export const RoleProvider = ({
  children
}) => {

  const { user } =
    useAuth();

  const role =
    user?.role || null;

  return (

    <RoleContext.Provider
      value={{
        role,

        isAdmin:
          role === "Admin",

        isAuditor:
          role === "Auditor",

        isCooperative:
          role ===
          "Cooperative Manager",

        isFarmer:
          role === "Farmer"
      }}
    >

      {children}

    </RoleContext.Provider>

  );

};

export const useRole = () =>
  useContext(RoleContext);