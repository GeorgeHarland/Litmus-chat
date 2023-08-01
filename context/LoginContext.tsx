import { createContext, useState } from "react";

type LoginContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

type Props = {
  children: React.ReactNode;
  initial?: boolean;
};

export const LoginContext = createContext<LoginContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const LoginContextProvider: React.FC<Props> = ({
  children,
  initial = false,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initial);
  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
