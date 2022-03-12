import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text} from 'native-base';
import React, {createContext, useContext, useEffect, useState} from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
  const [loadUser, setLoadUser] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLoadUser(false);
    AsyncStorage.getItem('UserData').then(userData => {
      if (userData) {
        setUser(userData);
      }
      setLoadUser(true);
    });
  }, []);

  const signInWithEmailPassword = (email, password) => {
    setUser({email, password});
    AsyncStorage.setItem('UserData', JSON.stringify({email, password}));
  };

  const signOut = () => {
    setUser(null);
    AsyncStorage.removeItem('UserData');
  };

  return (
    <AuthContext.Provider value={{user, signInWithEmailPassword, signOut}}>
      {loadUser ? (
        children
      ) : (
        <View>
          <Text>loading</Text>
        </View>
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
