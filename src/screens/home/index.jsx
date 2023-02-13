import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome </Text>
            <Text style={styles.textUser}>User63914</Text>
            <Button title="See my flights"
            style={styles.button}
            onPress={() => navigation.navigate('Flights')}
            color= {colors.text} />
        </View>
    );
};

export default Home;