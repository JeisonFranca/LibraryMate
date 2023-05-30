import React, {createContext, useState} from 'react';
import {View} from 'react-native';

export const AuthContext = createContext({});

export default function VariaveisGlobais({children}) {
  const [livros, setLivros] = useState([]);

  // const livros = [];

  return (
    <AuthContext.Provider
      value={{
        livros: livros,
        setLivros: setLivros,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
