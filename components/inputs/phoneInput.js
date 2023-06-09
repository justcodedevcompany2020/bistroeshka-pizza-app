import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BackgroundInput, TextColor} from '../colors/colors';
import {CloseEye, OpenEye} from '../icons/includeSvg';
import MaskInput from 'react-native-mask-input';

const PhoneInput = ({
  label,
  keyboardType,
  propsStyle,
  secureTextEntry,
  password,
  setEye,
  onChangeText,
  value,
}) => {
  return (
    <View style={[styles.inputParent, propsStyle]}>
      <Text style={styles.label}>{label}</Text>
      <MaskInput
        keyboardType={keyboardType}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        mask={[
          '+',
          '7',
          ' ',
          '(',
          /\d/,
          /\d/,
          /\d/,
          ')',
          ' ',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
        ]}
      />
      {password && (
        <TouchableOpacity style={styles.eye} onPress={setEye}>
          {secureTextEntry ? <CloseEye /> : <OpenEye />}
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  inputParent: {
    width: '100%',
    position: 'relative',
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
  eye: {
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
});

export default PhoneInput;
