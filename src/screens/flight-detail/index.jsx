import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from 'react-redux';

const FlightDetail = () => {
    const flight = useSelector((state) => state.flights.selected);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{flight?.title}</Text>
            <Text style={styles.title}>{flight?.description}</Text>
            <Text style={styles.title}>{flight?.airport}</Text>
            <Text style={styles.title}>{flight?.arrival}</Text>
        </View>
    );
};

export default FlightDetail;




