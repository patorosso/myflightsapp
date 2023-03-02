import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Home = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            
            <Text style={styles.textUser}>userId</Text>
            <Button title="See my flights"
            
            onPress={() => navigation.navigate('Flights')}
             />
        </View>
    );
};

export default Home;