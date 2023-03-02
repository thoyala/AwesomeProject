import React, { useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../hooks/AuthContextProvider";
import AuthLaravel from "../../services/AuthLaravel";
import UserTokenStorage from "../../storage/UserTokenStorage";


export default function Profile(){
    const {userToken, setUserToken} = useContext(AuthContext);
    const [ user, setUser ] = useState(null);

    useEffect(async()=>{
        // let u = await AuthLaravel.getUser("95KtSuhRDMWBMy1aUloBwJXKG5sgHBC3xWwRt7Y9");
        let u = await AuthLaravel.getUser(userToken); 
        setUser(u);
    },[]);

    const onLogout = async()=>{
        setUserToken("");
        UserTokenStorage.writeItem("");
     };
    return (
        <View >
            <Text>Profile Page</Text>
            <Text>{ JSON.stringify(user) }</Text>
            <Button title="Logout" onPress={onLogout} />
        </View>
    );
}
