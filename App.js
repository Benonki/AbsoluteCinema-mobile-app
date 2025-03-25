import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from "./src/routes/StackNav";
import { UserProvider } from './src/context/UserContext';


function App() {
  return (
      <UserProvider>
        <NavigationContainer>
          <StackNav/>
        </NavigationContainer>
      </UserProvider>
  );
}

export default App;
