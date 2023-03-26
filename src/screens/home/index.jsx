import React, { useState } from "react";
import { View, Text,  TouchableWithoutFeedback} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 


const Home = ({navigation}) => {

  const [searchPressed, setSearchPressed] = useState(false);
  const [historyPressed, setHistoryPressed] = useState(false);
  const [schedulePressed, setSchedulePressed] = useState(false);
  const [locationPressed, setLocationPressed] = useState(false);

  const searchIn = () => {
      setSearchPressed(true);
  };
  const searchOut = () => {
    setSearchPressed(false);
  };

  const historyIn = () => {
    setHistoryPressed(true);
  };
  const historyOut = () => {
    setHistoryPressed(false);
  };

  const scheduleIn = () => {
    setSchedulePressed(true);
  };
  const scheduleOut = () => {
  setSchedulePressed(false);
  };

  const locationIn = () => {
    setLocationPressed(true);
  };
  const locationOut = () => {
  setLocationPressed(false);
  };

  const searchColor = searchPressed ? colors.purple : colors.white;
  const historyColor = historyPressed ? colors.purple : colors.white;
  const scheduleColor = schedulePressed ? colors.purple : colors.white;
  const locationColor = locationPressed ? colors.purple : colors.white;




    return (
      <View style={styles.container}>
        
        <LinearGradient  
        colors={[  colors.darkblue, colors.primary]} 
        style={styles.gradientContainer}>
            <View style={styles.iconContainer}>

              <View style={styles.topContainer}>
                
                <View style={styles.topLeft}>
                  <TouchableWithoutFeedback  onPress={() => navigation.navigate('SearchFlight')} onPressIn={searchIn} onPressOut={searchOut}>
                    <View>
                        <Ionicons
                            name={'search'}
                            size={80}
                            color={searchColor}
                            style={{alignSelf: 'center'}}
                          />
                          <Text style={{fontFamily: 'Nunito-Bold',color: searchColor,fontSize: 13,alignSelf: 'center', paddingVertical: 10}}>Search by Flight</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>

                <View style={styles.topRight}>
                <TouchableWithoutFeedback  onPress={() => navigation.navigate('History')} onPressIn={historyIn} onPressOut={historyOut}>
                    <View>
                      <MaterialIcons
                          name={'history'}
                          size={80}
                          color={historyColor}
                          style={{alignSelf: 'center'}}
                        />
                      <Text style={{fontFamily: 'Nunito-Bold',color: historyColor,fontSize: 13,alignSelf: 'center', paddingVertical: 10}}>History</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              
              <View style={styles.bottomContainer}>

                <View style={styles.bottomLeft}>
                <TouchableWithoutFeedback  onPress={() => navigation.navigate('Schedule')} onPressIn={scheduleIn} onPressOut={scheduleOut}>
                  <View>
                    <Ionicons
                        name={'md-today-outline'}
                        size={80}
                        color={scheduleColor}
                        style={{alignSelf: 'center', paddingVertical: 10}}
                      />
                      <Text style={{fontFamily: 'Nunito-Bold',color: scheduleColor,fontSize: 13,alignSelf: 'center'}}>Schedule by Airport</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
                
                <View style={styles.bottomRight}>
                <TouchableWithoutFeedback  onPress={() => navigation.navigate('Schedule')} onPressIn={locationIn} onPressOut={locationOut}>
                  <View>
                    <Ionicons
                        name={'home'}
                        size={80}
                        color={locationColor}
                        style={{alignSelf: 'center', paddingVertical: 10}}
                      />
                    <Text style={{fontFamily: 'Nunito-Bold',color: {locationColor},fontSize: 13,alignSelf: 'center'}}>--------</Text>
                  </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
        </LinearGradient>
       
      </View>
    );
  }

export default Home;