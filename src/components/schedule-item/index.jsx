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
                
                    <Text style={{width: 60, fontFamily:'Nunito-Bold', fontSize:15,alignSelf:'center'}}>{time}</Text>
                    <Text style={{width: 60,fontFamily:'Nunito-Regular',alignSelf:'center'}}>{flightNumber}</Text>

                    {(origin? 
                    <Text style={{width: 60,fontFamily:'Nunito-Regular'}}>{origin}</Text> : 
                    <Text style={{width: 60,alignSelf:'center',fontFamily:'Nunito-Regular'}}>{destination}</Text>
                    )}

                    <Text style={{width: 75, color:color,fontFamily:'Nunito-Regular',alignSelf:'center'}}>{realStatus}</Text>
            </TouchableOpacity>
            
    );
}

export default ScheduleItem;