import { styles } from "./styles";
import React , {useState, useEffect} from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FlightInfoShort } from "../../components";
import { loadFlights } from "../../store/flight.slice";


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
            <FlatList
            data={descSortedFlights}
            style={styles.container}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            />
        </View>
    )
}

export default History;