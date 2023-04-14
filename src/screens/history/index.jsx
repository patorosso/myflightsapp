import { styles } from "./styles";
import React , {useEffect} from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FlightInfoShort } from "../../components";
import { loadFlights } from "../../store/flight.slice";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";



const History = () => {
    const dispatch = useDispatch();
    const flights = useSelector((state) => state.flight.flights);
    const renderItem = ({ item }) => (
        <FlightInfoShort
        {...item}
        />
    );
    const keyExtractor = (item) => item.id;
    
    const descSortedFlights = [...flights].sort((a, b) => b.id - a.id); // order desc

    useEffect(() => {
        dispatch(loadFlights());
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <LinearGradient  
        colors={[  colors.primary, colors.purple, colors.black]} 
        style={styles.gradientContainer}>
        
        
            
            <FlatList
            data={descSortedFlights}
            style={styles.container}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            />
            
        
            </LinearGradient>
        </View>
    )
}

export default History;