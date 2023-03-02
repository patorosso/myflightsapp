import React from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { styles } from "./styles";


const CustomModal = ({isModalVisible, onHandleCancel}) => {
    return (
        <Modal visible={isModalVisible} animationType='slide'  transparent={true}>
        <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Current Selection:</Text>
          <View style={styles.modalDetailContainer}>
            
            <Text style={styles.selectedSong}>asdasfsa</Text>
          </View>

          <View style={styles.modalButtonContainer}>
            <Button 
              title='Cancel'
              color='#626893'
              onPress={onHandleCancel}
            />

          </View>
        </View>
      </Modal>
    )
}

export default CustomModal;