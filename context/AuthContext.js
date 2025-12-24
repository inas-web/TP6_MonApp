import { createContext, useState } from "react"; 
export const AuthContext = createContext(); 
export default function AuthProvider({ children }) { 
const [user, setUser] = useState(null); 
const login = (name) => { 
setUser({ username: name }); 
}; 
const logout = () => setUser(null); 
return ( 
<AuthContext.Provider value={{ user, login, logout }}> 
{children} 
</AuthContext.Provider> 
); 
} 
