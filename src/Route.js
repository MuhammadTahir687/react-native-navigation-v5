import * as React from 'react';
import {NavigationContainer,DrawerActions,DarkTheme} from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {TouchableOpacity, Text, View, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DrawerNav from './Drawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useState} from "react"
import {TextInput} from 'react-native-paper';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;


const Stack = createStackNavigator();


function Login({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> I am Login </Text>
            <Button color="red" title="Register" onPress={() => {
                navigation.navigate('Register');
            }}/>
        </View>
    );
}

function Register({navigation, route}: { route: RouteProp<'Register'> }) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Route Name={route.name}</Text>
            <Button title="Login" onPress={() => {
                navigation.navigate('Login');
            }}/>
            <Button color="red" title="BackScreen" onPress={() => {
                navigation.goBack();
            }}/>

        </View>
    );

}

function BackScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Go Back to screen 1</Text>
            <Button title="Go Back" onPress={() => {
                navigation.goBack();
            }}/>
        </View>
    );
}

function Set() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> Setting </Text>
        </View>
    );
}

const Hello = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Login" /*screenOptions={{header:()=>null}} */ >
            <Stack.Screen name="Login" options={{headerRight: () => {
                    return (
                        <TouchableOpacity style={{marginRight:10}}>
                            <Button title="Menu"  color="red"
                            onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}} />
                        </TouchableOpacity>
                    );
                },}} component={DrawerN}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Back Screen" component={BackScreen}/>
        </Stack.Navigator>
    );
}

function Setting() {
    return (
        <Stack.Navigator initialRouteName="Setting" /*screenOptions={{header:()=>null}} */ >
            <Stack.Screen name="Setting" component={Set}/>
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

function DrawerN({navigation}) {

    return (
        <Drawer.Navigator
                           drawerStyle={{ backgroundColor: 'white', width: '70%'}}
                           drawerPosition={"right"}


        >

            <Drawer.Screen name="Profile" component={Profile}/>
            <Drawer.Screen name="Tools" component={Tools}/>
        </Drawer.Navigator>
    );
}

function Profile({navigation}) {
    const [username,setUsername]=useState('');
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Login</Text>
            <Button title="Open Drawer" onPress={()=>{navigation.toggleDrawer()}}/>
        </View>
    );
}

function Tools() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Tools</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();
export default class Route extends React.Component {
    render() {
        return (
            <NavigationContainer >
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Hello}/>
                    <Tab.Screen name="Setting" component={Setting}/>
                    <Tab.Screen name="Drawer" component={DrawerN}/>
                </Tab.Navigator>
            </NavigationContainer>

        );
    }

}

