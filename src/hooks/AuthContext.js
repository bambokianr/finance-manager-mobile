import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const [token, user] = await AsyncStorage.multiGet(['@FinanceManager:token', '@FinanceManager:user']);
      if(token[1] && user[1]) setData({ token: JSON.parse(token[1]), user: JSON.parse(user[1]) });
      setLoading(false);
    }
    loadStoragedData();
   }, []);

  const signIn = useCallback(async ({ email, password }) => {
    await api.post('/user/login', { email, password })
      .then(async res => {
        const token = res.data.token;
        const user = { name: res.data.name, email: res.data.email };

        await AsyncStorage.multiSet([
          ['@FinanceManager:token', JSON.stringify(token)],
          ['@FinanceManager:user', JSON.stringify(user)]
        ]);
        setData({ token, user });
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login, cheque as credenciais e tente novamente.');
      });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@FinanceManager:token', '@FinanceManager:user']);
    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, token: data.token, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if(!context) 
    throw new Error();
  return context;
}

export { AuthProvider, useAuth };