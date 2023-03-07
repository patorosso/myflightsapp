import React, { useState } from "react";
import { View, Text,  TouchableWithoutFeedback} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";


const Home = ({navigation}) => {

  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
      setIsPressed(true);
  };
  const handlePressOut = () => {
    setIsPressed(false);
  };

const iconColor = isPressed ? colors.yellow : colors.white;
const textColor = isPressed ? colors.yellow: colors.white;

    return (
      <View style={styles.container}>
        <LinearGradient  
        colors={[  colors.darkblue, colors.primary]} 
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.iconContainer}>

              <View style={{flex:0.5, flexDirection:'row'}}>
                
                <View style={{flex:0.5,borderBottomColor:'white',borderBottomWidth: 3,borderRightColor:'white',borderRightWidth:3,justifyContent: 'center',paddingRight:10}}>

                <TouchableWithoutFeedback  onPress={() => navigation.navigate('SearchFlight')} onPressIn={handlePressIn} onPressOut={handlePressOut}>
                  <View>
                      <Ionicons
                          name={'search'}
                          size={80}
                          color={iconColor}
                          style={{alignSelf: 'center'}}
                        />
                
                        <Text style={{fontFamily: 'Nunito-Bold',color: textColor,fontSize: 13,alignSelf: 'center', paddingVertical: 10}}>Search by Flight</Text>
                  </View>
                </TouchableWithoutFeedback>
                

                </View>


                <View style={{flex:0.5,borderBottomColor:'white',borderBottomWidth: 3,borderLeftColor:'white',borderLeftWidth:3,justifyContent: 'center',paddingLeft:10}}>
                <Ionicons
                    name={'book'}
                    size={80}
                    color={colors.white}
                    style={{alignSelf: 'center'}}
                  />
                  <Text style={{fontFamily: 'Nunito-Bold',color: 'white',fontSize: 13,alignSelf: 'center', paddingVertical: 10}}>History</Text>
                </View>
              </View>
              
              <View style={{flexDirection: 'row',flex:0.5}}>
                <View style={{flex:0.5,borderTopColor:'white',borderTopWidth: 3,borderRightColor:'white',borderRightWidth:3,justifyContent: 'center',paddingRight:10}}>
                <Ionicons
                    name={'settings'}
                    size={80}
                    color={colors.white}
                    style={{alignSelf: 'center', paddingVertical: 10}}
                  />
                  <Text style={{fontFamily: 'Nunito-Bold',color: 'white',fontSize: 13,alignSelf: 'center'}}>Search by Flight</Text>
                </View>
                <View style={{flex:0.5,borderTopColor:'white',borderTopWidth: 3,borderLeftColor:'white',borderLeftWidth:3,justifyContent: 'center',paddingLeft:10}}>
                <Ionicons
                    name={'home'}
                    size={80}
                    color={colors.white}
                    style={{alignSelf: 'center', paddingVertical: 10}}
                  />
                  <Text style={{fontFamily: 'Nunito-Bold',color: 'white',fontSize: 13,alignSelf: 'center'}}>Search by Flight</Text>
                </View>
              </View>

            </View>
        </LinearGradient>
      </View>
    );
  }

export default Home;