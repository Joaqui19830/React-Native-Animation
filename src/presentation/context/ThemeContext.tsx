import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {PropsWithChildren, createContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {ThemeColors, darkColors, lightColors} from '../../config/theme/theme';

type ThemeColor = 'light' | 'dark'; // Si nosotros tenemos mas podemos agregarle mas

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;

  setTheme: (them: ThemeColor) => void;
}

// Creamos nuestro contexto
export const ThemeContext = createContext({} as ThemeContextProps);

// Este es el que va a proveer la informacion actual del estado sobre nuestro contexto
export const ThemeProvider = ({children}: PropsWithChildren) => {
  // Esto es para que funcione cuando cambiamos de light a dark en el sistema operativo
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  const isDark = currentTheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  // Esto es para que funcione cuando cambiamos de light a dark en el sistema operativo
  // quiere decir que cuando en configuraciones pongamos dark la app cambie tambien a dark
  useEffect(() => {
    // console.log(colorScheme);
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]);

  // Esto tambien tiene otros usos como por ejemplo si un usuario se conecta al chat o un usuario se registro
  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     // console.log({nextAppState});
  //     const colorScheme = Appearance.getColorScheme();
  //     setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const setTheme = (theme: ThemeColor) => {
    // console.log({theme});
    setCurrentTheme(theme);
  };

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      {/* Aca mandamos nuestras props que tiebe nuestro ThemeContext */}
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          isDark: isDark,
          colors: colors,
          setTheme: setTheme,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
