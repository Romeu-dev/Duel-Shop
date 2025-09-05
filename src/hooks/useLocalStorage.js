import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Estado para armazenar nosso valor
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Obter do localStorage
      const item = window.localStorage.getItem(key);
      // Parse stored json ou se não existir, retornar initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Se der erro, retornar initialValue
      console.error(`Erro ao ler localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Função para atualizar o valor
  const setValue = (value) => {
    try {
      // Permitir que value seja uma função para ter a mesma API do useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Salvar no estado
      setStoredValue(valueToStore);
      // Salvar no localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Erro ao salvar no localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
