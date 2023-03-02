import React from "react";
import { useState } from "react";
import { View, Button, TextInput } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";

const User = () => {
    
        const [enteredName, setEnteredName] = useState("");
        const [enteredLastName, setEnteredLastName] = useState("");
        
        const  onHandlerChangeName = (text) => {
        setEnteredName(text);
    }

    const  onHandlerChangeLastName = (text) => {
        setEnteredLastName(text);
    }
          

    return (
        <View style={styles.container}>
            <TextInput 
                 value={enteredName}
                 keyboardType="ascii-capable"
                 style= {styles.inputName} 
                 placeholder="Enter name" 
                 onChangeText={onHandlerChangeName}
                 
                 />
            <TextInput 
                 value={enteredLastName}
                 keyboardType="ascii-capable"
                 style= {styles.inputLast} 
                 placeholder="Enter Last Name" 
                 onChangeText={onHandlerChangeLastName}
                 
                 />
            <Button title= "Create User"  color={colors.primary}/>
        </View>
    );
};

export default User;