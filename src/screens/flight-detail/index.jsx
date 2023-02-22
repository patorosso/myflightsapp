import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useSelector } from 'react-redux';

const FlightDetail = () => {
    
    const flight = useSelector((state) => state.flight.selected);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Confirmation number: {flight?.confirmationNumber}</Text>
            <Text style={styles.title}>{flight?.title}</Text>
            <Text style={styles.title}>{flight?.airports}</Text>
            <Text style={styles.title}>{flight?.description}</Text>
            <Text style={styles.title}>Departure: {flight?.departure}</Text>
            <Text style={styles.title}>Arrival: {flight?.arrival}</Text>
            <Text style={styles.title}>Terminal: {flight?.terminal}</Text>
            <Text style={styles.title}>Gate: {flight?.gate}</Text>
            
        </View>
    );
};

export default FlightDetail;




