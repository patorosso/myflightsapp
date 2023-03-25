import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { getStatusColor } from '../../functions';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants';


const ScheduleItem = ({flightNumber,status,origin,destination, time}) => {
    
    const realStatus = status == 'active' ? 'en-route' : status;
    const color = getStatusColor(realStatus);
    return (
            <TouchableOpacity style={styles.container} onPress={() => {}}>
                
                    <Text style={{width: 60}}>{time}</Text>
                    <Text style={{width: 60}}>{flightNumber}</Text>
                    {(origin? <Text style={{width: 60}}>{origin}</Text> : <Text style={{width: 60}}>{destination}</Text>)}
                    <Text style={{width: 75, color:color}}>{realStatus}</Text>
            </TouchableOpacity>
            
    );
}

export default ScheduleItem;