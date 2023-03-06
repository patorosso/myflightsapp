import React from "react";
import { View, Text} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";


const Settings = () => {
    return (
      <View style={styles.container}>
        <LinearGradient  
        colors={[  colors.darkblue, colors.primary, colors.darkblue ]} 
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.iconContainer}>

              <View style={{flex:0.5, flexDirection:'row'}}>
                
                <View style={{flex:0.5,borderBottomColor:'white',borderBottomWidth: 3,borderRightColor:'white',borderRightWidth:3,justifyContent: 'center',paddingRight:10}}>
                <Ionicons
                    name={'search'}
                    size={80}
                    color={colors.white}
                    style={{alignSelf: 'center'}}
                  />
                  <Text style={{fontFamily: 'Nunito-Bold',color: 'white',fontSize: 13,alignSelf: 'center', paddingVertical: 10}}>Search by Flight</Text>
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

export default Settings;