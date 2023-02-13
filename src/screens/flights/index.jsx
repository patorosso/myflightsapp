import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Flights = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Flights</Text>
            <Button title="Go to details"
            onPress={() => navigation.navigate('FlightDetail')}
            color='black'/>
        </View>
    );
};

export default Flights;