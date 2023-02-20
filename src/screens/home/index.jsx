import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <Text style={styles.textUser}>User63914</Text>
            <Button title="See my flights"
            
            onPress={() => navigation.navigate('Flights')}
             />
        </View>
    );
};

export default Home;