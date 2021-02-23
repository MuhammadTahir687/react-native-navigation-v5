import * as React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View,Text} from 'react-native';
import {Button} from 'react-native';

const Drawer=createDrawerNavigator();

function Home({navigation}){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Home!</Text>
            <Button title="Open Drawer" onPress={()=>{navigation.openDrawer()}}/>
            <Button title="Close Drawer" onPress={()=>{navigation.closeDrawer()}}/>
            <Button title="Toggle Drawer" onPress={()=>{navigation.toggleDrawer()}}/>
        </View>
    );
}
function Setting(){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Setting!</Text>
        </View>
    );
}
export default function DrawerNav(){


    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Setting" component={Setting}/>
            </Drawer.Navigator>
        </NavigationContainer>

    );


}
