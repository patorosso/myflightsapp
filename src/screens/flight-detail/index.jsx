import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const FlightDetail = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>
            EZE - FCO {"\n"}
            Buenos Aires - Roma {"\n"}
            Confirmation Number:YJZGQA {"\n"}
            Departure: 13:38 (Monday 20){"\n"}
            Arrival: 06:15 (Tuesday 21) {"\n"}
            Terminal: C {"\n"}
            Gate: Awaiting ...
            </Text>
        </View>
    );
};

export default FlightDetail;