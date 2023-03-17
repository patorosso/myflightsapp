import { styles } from "./styles";
import React , {useState} from "react";
import { FlatList, View } from "react-native";


const History = () => {
    const [flights, setFlights] = useState(null);
    return (
        <View style={styles.container}>
            <FlatList
            data={flights}
            
            />
        </View>
    )
}

export default History;