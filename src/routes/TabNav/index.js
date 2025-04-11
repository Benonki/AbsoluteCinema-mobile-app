import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {CommonActions, useNavigation} from '@react-navigation/native';
import { Menu } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import EkranGlownyScreen from "../../screens/EkranGlowny";
import RankingScreen from "../../screens/Ranking";
import SerialeScreen from "../../screens/Seriale";
import FilmyScreen from "../../screens/Filmy";
import NewsyScreen from "../../screens/Newsy";
import { UserContext } from '../../context/UserContext';

const Tab = createBottomTabNavigator();

const LogoTitle = ({ title }) => {
    const { user, setUser } = useContext(UserContext);
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

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
                              style={{ position: 'absolute', left: '50%', transform: [{ translateX: -60 }] }}
                              activeOpacity={0.7}
            >
                <Image
                    source={require('../../../assets/LogoBezTla.png')}
                    style={{ width: 120, height: 60 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <TouchableOpacity onPress={openMenu}>
                            <Image
                                source={user?.photoUser ? { uri: user.photoUser } : require('../../../assets/profil.png')}
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    }
                    contentStyle={{
                        backgroundColor: '#D9D9D9',
                        borderRadius: 20,
                        padding: 16,
                        width: 180,
                    }}
                >
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 12,
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            flex: 1,
                        }}>
                            {user?.name || 'Gość'}
                        </Text>
                        <Image
                            source={user?.photoUser ? { uri: user.photoUser } : require('../../../assets/profil.png')}
                            style={{ width: 32, height: 32, borderRadius: 16 }}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => { closeMenu(); navigation.navigate('Profil'); }}
                        style={styles.menuButton}
                    >
                        <Text style={styles.menuText}>Profil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            closeMenu();
                            setUser(null);
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: 'Logowanie' }],
                                })
                            );
                        }}
                        style={styles.menuButton}
                    >
                        <Text style={styles.menuText}>Ulubione ❤️</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { closeMenu(); navigation.navigate('Logowanie'); }}
                        style={styles.menuButton}
                    >
                        <Text style={styles.menuText}>Wyloguj się</Text>
                    </TouchableOpacity>
                </Menu>
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

const styles = {
    menuButton: {
        backgroundColor: '#F9F8EB',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 8,
    },
    menuText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
};

export default TabNav;