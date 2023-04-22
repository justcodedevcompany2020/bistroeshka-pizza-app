import {SafeAreaView, StyleSheet} from 'react-native';
import NavMenu from './NavMenu';

export default Wrapper = ({
  leftIcon,
  title,
  navigation,
  children,
  rightIcon,
  openFilter,
  bottomLine,
  history,
}) => {
  return (
    <SafeAreaView style={[styles.mainParent]}>
      <NavMenu
        leftIcon={leftIcon}
        title={title}
        navigation={navigation}
        rightIcon={rightIcon}
        openFilter={openFilter}
        bottomLine={bottomLine}
        history={history}
      />
      {children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainParent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
});
