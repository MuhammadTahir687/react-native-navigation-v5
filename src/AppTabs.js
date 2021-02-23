import * as React from "react";
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


function Setting(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Home</Text>
        </View>
    );
}
const Tab=createBottomTabNavigator();
export default function AppTabs(){

        return (

                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Setting}/>
                </Tab.Navigator>

        );
}


