import {Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { getStatusColor, timeToHour } from '../../functions';


const ScheduleItem = ({flightNumber,status,origin,destination, time}) => {
    
    const realStatus = status == 'active' ? 'en-route' : status;
    const color = getStatusColor(realStatus);
    const hour = timeToHour(time);
    
    return (
            <TouchableOpacity style={styles.container} onPress={() => {}}>
                
                    <Text style={{width: 60, fontFamily:'Nunito-Bold', fontSize:15,alignSelf:'center'}}>{hour}</Text>
                    <Text style={{width: 75,fontFamily:'Nunito-Regular',alignSelf:'center'}}>{flightNumber}</Text>

                    {(origin? 
                    <Text style={{width: 60,fontFamily:'Nunito-Regular'}}>{origin}</Text> : 
                    <Text style={{width: 60,alignSelf:'center',fontFamily:'Nunito-Regular'}}>{destination}</Text>
                    )}

                    <Text style={{width: 75, color:color,fontFamily:'Nunito-Regular',alignSelf:'center'}}>{realStatus}</Text>
            </TouchableOpacity>
            
    );
}

export default ScheduleItem;