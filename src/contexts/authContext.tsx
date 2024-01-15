import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import storage from '../services/storage';
import config from '../services/config';

/**
 * Type definition for the authentication context.
 * 
 * @typedef AuthContextType
 * @property {boolean} isLogin - Indicates whether the user is logged in.
 * @property {boolean} isAdmin - Indicates whether the logged-in user is an admin.
 * @property {Function} login - Function to set the user's login status to true.
 * @property {Function} logout - Function to log out the user.
 */
type AuthContextType = {
  isLogin: boolean;
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isLogin: false,
  isAdmin: false,
  login: () => { },
  logout: () => { },
});

/**
 * Provides an authentication context to its children.
 * 
 * This component sets up and provides an authentication context using React's Context API.
 * It handles login and logout functionalities and maintains the state related to user's
 * authentication and admin status.
 * 
 * @param {PropsWithChildren} props - Props with children for the functional component.
 * @returns {React.ReactElement} The AuthContext.Provider wrapping its children.
 */
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

/**
 * Custom hook for consuming the AuthContext.
 * 
 * This hook provides easy access to the AuthContext, allowing components to
 * access authentication state and functionalities like login and logout.
 *
 * @returns {AuthContextType} The authentication context.
 */
export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;
