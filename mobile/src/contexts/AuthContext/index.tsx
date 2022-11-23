import React, { createContext, ReactNode } from "react";

export interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signIn() {
    console.log("Vamos logar...");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: "¡Duque",
          avatarUrl: "https://github.com/alexmarquesalves.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
