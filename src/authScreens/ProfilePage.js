import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import Wrapper from './../../components/fixedElements/Wrapper';
import {TextColor} from '../../components/colors/colors';

const {width} = Dimensions.get('screen');
export default ProfilePage = ({}) => {
  return (
    <Wrapper
      leftIcon={true}
      rightIcon={false}
      history={true}
      title={'Личный кабинет'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.avatarNameParent}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.avatar}
          />
          <View style={styles.nameSurnameParent}>
            <Text style={styles.nameSurname}>Александра Смирнова В.</Text>
            <Text style={styles.phoneNumber}>+7 (909) 909-99-99</Text>
          </View>
        </View>

        <View style={styles.moreDetailProfile}></View>
      </ScrollView>
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  avatarNameParent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 27,
    columnGap: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  nameSurnameParent: {
    rowGap: 6,
  },
  nameSurname: {
    color: TextColor,
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },
  phoneNumber: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: TextColor,
  },
  moreDetailProfile: {
    width: width,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    height: 50,
  },
});
