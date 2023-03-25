import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';



const ScheduleItem = ({flightNumber,status,origin,company,destination, time}) => {
    return (
            <TouchableOpacity style={styles.container}>
                <Text style={{width: 60}}>{time}</Text>
                <Text style={{width: 60}}>{company}</Text>
                <Text style={{width: 60}}>{flightNumber}</Text>
                {(origin? <Text style={{width: 90}}>{origin}</Text> : <Text style={{width: 90}}>{destination}</Text>)}
                <Text style={{width: 60}}>{status}</Text>
            </TouchableOpacity>
       
        
    );
}

export default ScheduleItem;