import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonColor} from '../colors/colors';

export default BigButton = ({buttonText, navigation, buttonStyle}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={navigation}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: ButtonColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: 265,
    height: 50,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
});
