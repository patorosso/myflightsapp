import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { CustomModal } from "../../components";
import { colors } from "../../constants";

const Settings = () => {
const [isModalVisible, setIsModalVisible] = useState(false);


  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
  };

  
  const onHandlerModal = (text) => {
    setIsModalVisible(!isModalVisible)
  };


return (
    <View style={styles}>
    
    <Button onPress={onHandlerModal} color={colors.primary} title='asd'/>
    
    <CustomModal 
    isModalVisible={isModalVisible}
    onHandleCancel={onHandleCancel}
    />
    </View>


      

      );
};

export default Settings;