import React from "react";
import {  TouchableHighlight, Text,View } from "react-native";
import { colors } from "../../constants";
import { styles } from "./styles";


const Flights = ({navigation}) => {
    return (
        <View style={styles.container}>
        <TouchableHighlight 
            style={styles.itemContainer} underlayColor={colors.white}  activeOpacity={0.1}  onPress={() => navigation.navigate('FlightDetail')}>
          <Text style={styles.itemList}>ITA AZ-681</Text>
        </TouchableHighlight>
        </View>
    );
};

export default Flights;