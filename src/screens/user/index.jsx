import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { View, Button, TextInput } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";

const User = () => {
    const user = useSelector((state) => state.user.users);
    const [enteredName, setEnteredName] = useState("");
    const [enteredLastName, setEnteredLastName] = useState("");
        
          

    return (
        <View style={styles.container}>
            <TextInput 
                 value={enteredName}
                 keyboardType="ascii-capable"
                 style= {styles.inputName} 
                 placeholder="Enter name" 
                 onChangeText={text => setEnteredName(text)}
                 
                 />
            <TextInput 
                 value={enteredLastName}
                 keyboardType="ascii-capable"
                 style= {styles.inputLast} 
                 placeholder="Enter Last Name" 
                 onChangeText={text => setEnteredLastName(text)}
                 
                 />
            <Button title= "Create User"  color={colors.primary}/>
        </View>
    );
};

export default User;