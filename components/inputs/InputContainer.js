import {StyleSheet, Text, TextInput, View} from 'react-native';
import {BackgroundInput, TextColor} from '../colors/colors';

const InputContainer = ({label, keyboardType, propsStyle, secureTextEntry}) => {
  return (
    <View style={[styles.inputParent, propsStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputParent: {
    width: '100%',
  },
  label: {
    color: TextColor,
    fontSize: 15,
    marginBottom: 7,
    fontFamily: 'Montserrat-Regular',
  },
  input: {
    height: 40,
    backgroundColor: BackgroundInput,
    borderRadius: 6,
    color: TextColor,
    paddingLeft: 10,
  },
});

export default InputContainer;
