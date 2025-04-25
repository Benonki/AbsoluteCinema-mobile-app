import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View, Text } from 'react-native';
import LoginScreen from "../../screens/Login";
import RejestracjaScreen from "../../screens/Rejestracja";
import TabNav from "../TabNav";
import ProfilScreen from "../../screens/Profil";
import UlubioneScreen from "../../screens/Ulubione";
import OpisScreen from "../../screens/Opis";
import NewsScreen from "../../screens/News";

const Stack = createNativeStackNavigator();

const LogoTitle = ({ title }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
        <Text style={{
            color: '#F9F8EB',
            fontSize: 28,
            fontWeight: 'bold',
            marginLeft: 10,
            textShadowColor: 'black',
            textShadowRadius: 5,
        }}>
            {title}
        </Text>
        <Image
            source={require('../../../assets/LogoBezTla.png')}
            style={{ width: 120, height: 60 }}
            resizeMode="contain"
        />
    </View>
);

const StackNav = () => {
    return (
        <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#5E5A5A' }, headerTintColor: '#fff',}}>
            <Stack.Screen name="Logowanie" component={LoginScreen} options={{ headerTitle: () => <LogoTitle title="Logowanie" /> }}/>
            <Stack.Screen name="Rejestracja" component={RejestracjaScreen} options={{ headerTitle: () => <LogoTitle title="Rejestracja" /> }}/>
            <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false }}/>
            <Stack.Screen name="Profil" component={ProfilScreen} options={{ headerTitle: () => <LogoTitle title="Profil" /> }}/>
            <Stack.Screen name="Ulubione" component={UlubioneScreen} options={{ headerTitle: () => <LogoTitle title="Ulubione ❤️" /> }}/>
            <Stack.Screen name="Opis" component={OpisScreen} options={{ headerTitle: () => <LogoTitle title="Opis" /> }}/>
            <Stack.Screen name="News" component={NewsScreen} options={{ headerTitle: () => <LogoTitle title="News" /> }}/>
        </Stack.Navigator>
    );
};

export default StackNav;
