import React , {useState} from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { SelectList } from 'react-native-dropdown-select-list';

const Schedule = () => {
    const [selected, setSelected] = useState("");

    const data = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ];


    return (
        <View style={styles.container}>
            <View style={{width: '80%', alignSelf: 'center', marginTop: 40}}>
                
            </View>
        </View>
    );
} 
export default Schedule;


