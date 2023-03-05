import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";

const Home = ({ navigation }) => {
    // const userMail = useSelector((state) => state.auth.email);
    const [enteredValue,setEnteredValue] = useState("");

    const onHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^a-zA-Z0-9]/g, ''));
      };

    return (
        <View style={styles.container}>
            {/* <Text style={styles.textUser}>{userMail}</Text>  */}
            <TextInput 
            style={styles.input} 
            placeholder="Example: AZ681, BA267 ..."
            autoCapitalize="characters"
            keyboardAppearance="light"
            value={enteredValue}
            onChangeText={onHandlerChange}
            />
            <Button title="See my flights"
            color={colors.primary}
            onPress={() => navigation.navigate('Flights')}
             />
        </View>
    );
};

export default Home;