import { ReactNode, createContext, useState } from "react";

export type FavoritesContextType = {
  favoriteWords: string[];
  addFavoriteWord: (selectedWord: string) => void;
  removeFavoriteWord: (selectedWord : string) => void,
};

export const FavoritesContext = createContext<Partial<FavoritesContextType>>({})

// Define the children props for the contextprovider
type Props = {
   children: ReactNode;
}

// Define context provider
const FavoritesContextProvider = ({ children } : Props) => {
  const [favoriteWords, setFavoriteWords] = useState<string[]>([]);

  const addFavoriteWord = (selectedWord : string) => {
   setFavoriteWords(prev => [...prev, selectedWord])
  };

  const removeFavoriteWord = (selectedWord: string) => {
   setFavoriteWords(favoriteWords.filter(word => word !== selectedWord))
  }

  const value = {
    favoriteWords,
    addFavoriteWord,
    removeFavoriteWord,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}; 

export default FavoritesContextProvider;
