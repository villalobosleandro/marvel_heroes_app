import React, { useContext } from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator ();
import { AuthContext } from './../context/authProvider';
import { HomeScreen } from './../screens/home';

const AppStack = props => {
    const { logout } = useContext(AuthContext);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 18,
                        // color: Constant.colors.whiteColor
                    },
                    headerStyle: {
                        elevation: 0,
                        // backgroundColor: Constant.colors.backgroundColorPrimary,
                    },
                    // headerRight: () => (
                    //     <View style={{marginRight: 10}}>
                    //         <MaterialCommunityIcons
                    //             name="logout"
                    //             size={30}
                    //             color={Constant.colors.whiteColor}
                    //             onPress={() => logout()}
                    //         />
                    //     </View>
                    // )
                }}
            />

            {/* <Stack.Screen
                name="Detail"
                component={CharacterDetail}
                options={({ navigation, route }) => ({
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 18,
                        color: Constant.colors.whiteColor
                    },
                    headerStyle: {
                        elevation: 0,
                        backgroundColor: '#32353a',
                    },
                    headerRight: () => (
                        <View style={{marginRight: 10}}>
                            <MaterialCommunityIcons
                                name="logout"
                                size={30}
                                color={Constant.colors.whiteColor}
                                onPress={() => logout()}
                            />
                        </View>
                    ),
                    headerLeft: () => (
                        <View style={{marginLeft: 10}}>
                            <MaterialCommunityIcons
                                name="arrow-left"
                                size={30}
                                color={Constant.colors.whiteColor}
                                onPress={() => navigation.navigate('Home')}
                            />
                        </View>
                    )
                })}
            /> */}
        </Stack.Navigator>
    );
};

export default AppStack;
