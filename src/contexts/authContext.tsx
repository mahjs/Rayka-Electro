import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import storage from '../services/storage';
import config from '../services/config';

type AuthContextType = {
  isLogin: boolean;
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isLogin: false,
  isAdmin: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isAdmin] = useState<boolean>(true);

  useEffect(() => {
    const token = storage.get(config.tokenName);
    if (token) setIsLogin(true);
    else setIsLogin(false);
  }, [isLogin]);

  const logout = () => {
    storage.remove(config.tokenName);
    setIsLogin(false);
  };

  const login = () => {
    setIsLogin(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        isAdmin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
