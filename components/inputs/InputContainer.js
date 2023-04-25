import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackgroundInput, TextColor} from '../colors/colors';
import {CloseEye, OpenEye} from '../icons/includeSvg';

const InputContainer = ({
  label,
  keyboardType,
  propsStyle,
  secureTextEntry,
  password,
  setEye,
}) => {
  return (
    <View style={[styles.inputParent, propsStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        style={styles.input}
        secureTextEntry={secureTextEntry}
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

export default InputContainer;
