import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LayoutAnimation} from 'react-native';

type State = {
  isAuthenticated: boolean;
  username?: string;
  favorites: string[]; 
};

type Actions = {
  login: (user: string, pass: string) => Promise<boolean>;
  logout: () => void;
  toggleFavorite: (name: string) => void;
  isFavorite: (name: string) => boolean;
};

export const useAppStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      username: undefined,
      favorites: [],

      login: async (user, pass) => {
        const ok = user === 'admin' && pass === '1234';
        if (ok) set({isAuthenticated: true, username: user});
        return ok;
      },

      logout: () => set({isAuthenticated: false, username: undefined}),

      toggleFavorite: (name) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const current = get().favorites;
        const exists = current.includes(name);
        set({
          favorites: exists
            ? current.filter(n => n !== name)
            : [...current, name],
        });
      },

      isFavorite: (name) => get().favorites.includes(name),
    }),
    {
      name: 'pokeexplorer_store',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        username: state.username,
        favorites: state.favorites,
      }),
    }
  )
);
