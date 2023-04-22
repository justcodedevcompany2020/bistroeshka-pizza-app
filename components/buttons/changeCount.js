import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MinusIcon, PlusIcon} from '../icons/includeSvg';
import {TextColor} from '../colors/colors';

export const ChangeCount = ({
  setCountMinus,
  setCountPlus,
  count,
  height,
  width,
}) => {
  return (
    <View style={[styles.changeCountParent, {height, width}]}>
      <TouchableOpacity onPress={setCountMinus}>
        <MinusIcon />
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity onPress={setCountPlus}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  changeCountParent: {
    backgroundColor: '#F7F7F7',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  count: {
    color: TextColor,
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
  },
});
