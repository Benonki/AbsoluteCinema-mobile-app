import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import EkranGlownyScreen from "../../screens/EkranGlowny";
import RankingScreen from "../../screens/Ranking";
import SerialeScreen from "../../screens/Seriale";
import FilmyScreen from "../../screens/Filmy";
import NewsyScreen from "../../screens/Newsy";

const Tab = createBottomTabNavigator();

const LogoTitle = ({ title }) => {
    const navigation = useNavigation();

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            width: '100%',
        }}>
            <Text style={{
                color: '#F9F8EB',
                fontSize: 28,
                fontWeight: 'bold',
                textShadowColor: 'black',
                textShadowOffset: { width: 0, height: 0 },
                textShadowRadius: 5,
                flex: 1,
            }}>
                {title}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}
                style={{position: 'absolute', left: '50%', transform: [{ translateX: -60 }],}}
                activeOpacity={0.7}
            >
                <Image
                    source={require('../../../assets/LogoBezTla.png')}
                    style={{ width: 120, height: 60 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <View style={{flex: 1, alignItems: 'flex-end',}}>
                <Image
                    source={require('../../../assets/profil.png')}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                    resizeMode="cover"
                />
            </View>
        </View>
    );
};

const TabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: { backgroundColor: '#5E5A5A' },
                tabBarActiveTintColor: '#F9F8EB',
                tabBarInactiveTintColor: '#ccc',
                headerStyle: { backgroundColor: '#5E5A5A' },
                headerTitle: (props) => <LogoTitle {...props} />,
                headerTintColor: '#fff',
            }}>
            <Tab.Screen name="Seriale" component={SerialeScreen}
                options={{
                    headerTitle: () => <LogoTitle title="Seriale" />,
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="television" size={size} color={color} />)
                }}/>
            <Tab.Screen name="Filmy" component={FilmyScreen}
                options={{
                    headerTitle: () => <LogoTitle title="Filmy" />,
                    tabBarIcon: ({ color, size }) => (<MaterialIcons name="movie" size={size} color={color} />)
                }}/>
            <Tab.Screen name="Home" component={EkranGlownyScreen}
                options={{
                    headerTitle: () => <LogoTitle title="Home" />,
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" size={size} color={color} />)
                }}/>
            <Tab.Screen name="News'y" component={NewsyScreen}
                options={{
                    headerTitle: () => <LogoTitle title="News'y" />,
                    tabBarIcon: ({ color, size }) => (<MaterialIcons name="email" size={size} color={color} />)
                }}/>
            <Tab.Screen name="Ranking" component={RankingScreen}
                options={{
                    headerTitle: () => <LogoTitle title="Ranking" />,
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="trophy" size={size} color={color} />)
                }}/>
        </Tab.Navigator>
    );
};

export default TabNav;