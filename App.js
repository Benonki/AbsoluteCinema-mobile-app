import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from "./src/routes/StackNav";
import { UserProvider } from './src/context/UserContext';
import { Provider as PaperProvider } from 'react-native-paper';


function App() {
  return (
      <PaperProvider>
        <UserProvider>
         <NavigationContainer>
             <StackNav/>
            </NavigationContainer>
        </UserProvider>
      </PaperProvider>
  );
}

export default App;
