// src/UserContext.js
import { createContext, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = UserContext.Provider;

export default UserContext;
