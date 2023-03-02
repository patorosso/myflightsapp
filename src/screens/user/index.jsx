import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../store/actions";
import { View, Button, TextInput } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import { REALTIME_DATABASE_URL } from "../../constants/firebase";

const User = () => {
    


    const user = useSelector((state) => state.user.users);
    const [enteredName, setEnteredName] = useState("");
    const [enteredLastName, setEnteredLastName] = useState("");
    
    
    
    const onCreateUser = () => {
        const data = {
          firstName: enteredName,
          lastName: enteredLastName
        };
        const url = `${REALTIME_DATABASE_URL}/users.json`;
        fetch(url, {
          method: "POST",
          body: JSON.stringify({
            date: Date.now(),
            data})
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

        setEnteredLastName("");
        setEnteredName("");
      }



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
            <Button title= "Create User" onPress={onCreateUser} color={colors.primary}/>
        </View>
    );
};

export default User;