import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from './presentation/context/ThemeContext';
import {Navigator} from './presentation/navigator/Navigatior';

// const AppNavigation = ({children}: PropsWithChildren) => {
//Ahora aca si vamos a tener acceso
//   const {isDark} = useContext(ThemeContext);

//   return (
// Ese theme que le ponemos es para que no se vea como un tipo flash blanco cuando hacemos para atras
// Esto es algo propio de react navigation
//     <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
//       {children}
//     </NavigationContainer>
//   );
// };

// Lo que hacemos es que nuestro appnavigation esté adentro de nuesstro apptheme para que nosotros aqui podamos tener acceso a nuestro
// Themeprovider
// const AppTheme = ({children}: PropsWithChildren) => {
//   return (
//     <ThemeProvider>
//       <AppNavigation>{children}</AppNavigation>
//     </ThemeProvider>
//   );
// };

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};
