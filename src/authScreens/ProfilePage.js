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
import EditInput from '../../components/inputs/editInput';
import BigButton from './../../components/buttons/bigButton';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {width} = Dimensions.get('window');
export default ProfilePage = ({}) => {
  const navigation = useNavigation();
  const [nameEdit, setNameEdit] = useState(false);
  const [surnameEdit, setSurnameEdit] = useState(false);
  const [paternityEdit, setPaternityEdit] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    surname: '',
    paternity: '',
  });
  return (
    <Wrapper
      stylePropsWrap={{paddingHorizontal: 0}}
      styleProps={{paddingHorizontal: 20}}
      leftIcon={true}
      rightIcon={false}
      history={true}
      goBack={() => navigation.goBack()}
      navigation={() => navigation.navigate('ShopHistory')}
      title={'Личный кабинет'}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
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

        <View style={styles.moreDetailProfile}>
          <EditInput
            keyboardType={'default'}
            label={'Фамилия'}
            isVerify={surnameEdit}
            edit={!surnameEdit}
            arrowRight={false}
            placeholder={'Смирнова'}
            editable={surnameEdit}
            onPress={() => setSurnameEdit(!surnameEdit)}
            // onChange={null}
            // value={''}
          />
          <EditInput
            keyboardType={'default'}
            label={'Имя'}
            isVerify={nameEdit}
            edit={!nameEdit}
            arrowRight={false}
            placeholder={'Александра'}
            editable={nameEdit}
            onPress={() => setNameEdit(!nameEdit)}
            // onChange={null}
            // value={''}
          />
          <EditInput
            keyboardType={'default'}
            label={'Отчество'}
            isVerify={paternityEdit}
            edit={!paternityEdit}
            arrowRight={false}
            placeholder={'Викторовна'}
            editable={paternityEdit}
            onPress={() => setPaternityEdit(!paternityEdit)}
            // onChange={null}
            // value={''}
          />
          <EditInput
            keyboardType={'default'}
            label={'Адреса доставки'}
            isVerify={false}
            arrowRight={true}
            edit={false}
            placeholder={'Перейти'}
            editable={false}
            onPress={() =>
              navigation.navigate('NotAuthNavigators', {
                screen: 'EditAddress',
              })
            }
            // onChange={null}
            // value={''}
          />
          <EditInput
            keyboardType={'default'}
            label={'Пароль'}
            isVerify={false}
            arrowRight={true}
            edit={false}
            secureTextEntry={true}
            placeholder={'*********'}
            editable={false}
            onPress={() =>
              navigation.navigate('NotAuthNavigators', {
                screen: 'EditPasswordUser',
              })
            }
            // onChange={null}
            // value={''}
          />
          <BigButton buttonText={'Выйти'} />
        </View>
      </KeyboardAwareScrollView>
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
    paddingHorizontal: 20,
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
    borderBottomWidth: 0,
    borderColor: '#F2F2F2',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 28,
    padding: 25,
  },
});
