import { StyleSheet } from 'react-native';

import { colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    
    marginHorizontal: 20,
    marginTop: 60,
    marginVertical: 10,
    borderRadius: 10,
    height: 110,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Nunito-Medium',
    fontSize: 24,
    color: colors.white,
  },
  
  
});