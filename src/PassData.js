import * as React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import {useState} from "react";

const Drawer=createDrawerNavigator();
const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();



function Login ({navigation}){
const [username,setUsername]=useState('');
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Hello!</Text>
            <TextInput placeholder="name"
                       style={{borderBottomWidth:1,borderBottomColor:"black",marginBottom:20,marginTop:0}}
                       onChangeText={(text)=>setUsername(text)}
            />

            <Button color="red" title="Login"
                    onPress={() => {navigation.navigate("Register",{Name:username})}}

            />

            <Button color="red" title="Register"
                    onPress={() => {navigation.navigate('Register',{FirstName:"Muhammad",LastName:"Tahir"});
                    }}/>
        </View>
    );
}

function Register ({navigation,route}){
    const{FirstName,LastName,Name}=route.params;


    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Hello!</Text>
            <Text>{JSON.stringify(FirstName)}{LastName}</Text>
            <Text>{LastName}</Text>
            <Text>Login User is {Name}: not</Text>
            <Button title="Update Header" onPress={()=>{navigation.setOptions({title:"Register User"})}}/>
        </View>
    );
}




export default class PassData extends React.Component {

    constructor(props){
        super(props);
          this.state={
              username:''
          };

    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen

                        /* options={
                             (route)=>
                             {headerTitle:route.params.FirstName}
                         } */

                        name="Register" component={Register}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }


}

