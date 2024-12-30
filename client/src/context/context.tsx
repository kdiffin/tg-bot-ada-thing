import { TelegramUser } from "@/dbtypes";
import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: TelegramUser | null;
  login: (userData: TelegramUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<TelegramUser | null>(() => {
    const saved = localStorage.getItem("telegram_user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (userData: TelegramUser) => {
    localStorage.setItem("telegram_user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("telegram_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
