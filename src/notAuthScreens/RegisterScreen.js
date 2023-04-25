import {Button, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../../components/fixedElements/Wrapper';
import {ButtonColor, TextColor} from '../../components/colors/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputContainer from '../../components/inputs/InputContainer';
import BigButton from '../../components/buttons/bigButton';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

export default RegisterScreen = ({}) => {
  const navigation = useNavigation();
  const [passwordEye, setPasswordEye] = useState(true);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(true);
  return (
    <Wrapper leftIcon={true} goBack={() => navigation.goBack()}>
      <KeyboardAwareScrollView>
        <Text style={styles.title}>Регистрация</Text>
        <InputContainer
          label={'Имя'}
          keyboardType={'default'}
          propsStyle={styles.firstInput}
        />
        <InputContainer
          label={'Фамилия'}
          keyboardType={'default'}
          propsStyle={styles.firstInput}
        />
        <InputContainer
          label={'Отчество'}
          keyboardType={'default'}
          propsStyle={styles.firstInput}
        />
        <InputContainer
          label={'Номер телефона'}
          keyboardType={'number-pad'}
          propsStyle={styles.firstInput}
        />
        <InputContainer
          label={'Адрес доставки'}
          keyboardType={'default'}
          propsStyle={styles.firstInput}
        />
        <InputContainer
          label={'Пароль'}
          keyboardType={'default'}
          secureTextEntry={passwordEye}
          propsStyle={styles.firstInput}
          password={true}
          setEye={() => setPasswordEye(!passwordEye)}
        />
        <InputContainer
          label={'Повторите пароль'}
          keyboardType={'default'}
          secureTextEntry={confirmPasswordEye}
          propsStyle={styles.firstInput}
          password={true}
          setEye={() => setConfirmPasswordEye(!confirmPasswordEye)}
        />

        <BigButton
          buttonText={'Зарегистрироваться'}
          navigation={() => navigation.navigate('ConfirmPhoneRegister')}
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
