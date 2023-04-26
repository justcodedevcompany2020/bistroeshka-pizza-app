import {Button, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../../components/fixedElements/Wrapper';
import {ButtonColor, TextColor} from '../../components/colors/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputContainer from '../../components/inputs/InputContainer';
import BigButton from '../../components/buttons/bigButton';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import PhoneInput from '../../components/inputs/phoneInput';
import {useDispatch} from 'react-redux';
import {registerRequest} from '../../store/reducer/registerSlice';

export default RegisterScreen = ({}) => {
  const navigation = useNavigation();
  const [passwordEye, setPasswordEye] = useState(true);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(true);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [paternity, setPaternity] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  
  return (
    <Wrapper leftIcon={true} goBack={() => navigation.goBack()}>
      <KeyboardAwareScrollView>
        <Text style={styles.title}>Регистрация</Text>
        <InputContainer
          label={'Имя'}
          keyboardType={'default'}
          propsStyle={styles.firstInput}
          onChangeText={value => setName(value)}
          value={name}
        />
        <InputContainer
          label={'Фамилия'}
          keyboardType={'default'}
          propsStyle={styles.firstInput}
          onChangeText={value => setSurname(value)}
          value={surname}
        />
        <InputContainer
          label={'Отчество'}
          keyboardType={'default'}
          propsStyle={styles.firstInput}
          onChangeText={value => setPaternity(value)}
          value={paternity}
        />
        <PhoneInput
          label={'Номер телефона'}
          keyboardType={'phone-pad'}
          propsStyle={styles.firstInput}
          onChangeText={value => {
            console.log('====================================');
            console.log(value);
            console.log('====================================');
            setPhone(value);
          }}
          value={phone}
        />
        <InputContainer
          label={'Адрес доставки'}
          keyboardType={'default'}
          propsStyle={styles.firstInput}
          onChangeText={value => setAddress(value)}
          value={address}
        />
        <InputContainer
          label={'Пароль'}
          keyboardType={'default'}
          secureTextEntry={passwordEye}
          propsStyle={styles.firstInput}
          password={true}
          setEye={() => setPasswordEye(!passwordEye)}
          onChangeText={value => setPassword(value)}
          value={password}
        />
        <InputContainer
          label={'Повторите пароль'}
          keyboardType={'default'}
          secureTextEntry={confirmPasswordEye}
          propsStyle={styles.firstInput}
          password={true}
          setEye={() => setConfirmPasswordEye(!confirmPasswordEye)}
          onChangeText={value => setConfirmPassword(value)}
          value={confirmPassword}
        />

        <BigButton
          buttonText={'Зарегистрироваться'}
          navigation={() => {
            dispatch(
              registerRequest({
                name: name,
                lastName: paternity,
                surname: surname,
                password: password,
                password_confirmation: confirmPassword,
                phone: phone,
                address: address,
              }),
            );
            // navigation.navigate('ConfirmPhoneRegister');
          }}
        />
        <Text style={styles.haveAccount}>
          Уже есть аккаунт?{' '}
          <Text
            onPress={() => navigation.navigate('LoginScreen')}
            style={styles.goToLogin}>
            Войти
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    color: TextColor,
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'Raleway-Medium',
    marginBottom: 30,
  },
  firstInput: {
    marginBottom: 15,
  },
  haveAccount: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: TextColor,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  goToLogin: {
    color: ButtonColor,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
  },
});
