import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
    const userMail = useSelector((state) => state.auth.email);
    return (
        <View style={styles.container}>
            
            <Text style={styles.textUser}>{userMail}</Text>
            <Button title="See my flights"
            
            onPress={() => navigation.navigate('Flights')}
             />
        </View>
    );
};

export default Home;