import {Button, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../../components/fixedElements/Wrapper';
import {ButtonColor, TextColor} from '../../components/colors/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputContainer from '../../components/inputs/InputContainer';
import BigButton from '../../components/buttons/bigButton';
import {useNavigation} from '@react-navigation/native';

export default LoginScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <KeyboardAwareScrollView>
        <Text style={styles.title}>Вход</Text>
        <InputContainer
          label={'Номер телефона'}
          keyboardType={'phone-pad'}
          propsStyle={styles.firstInput}
        />
        <InputContainer
          label={'Пароль'}
          keyboardType={'default'}
          secureTextEntry={true}
        />
        <Text
          style={styles.forgotText}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Забыли пароль?
        </Text>
        <BigButton buttonText={'Войти'} />
        <Text style={styles.haveAccount}>Нет аккаунта?</Text>
        <Text
          onPress={() => navigation.navigate('RegisterScreen')}
          style={styles.goToReg}>
          Зарегистрироваться
        </Text>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 114,
    color: TextColor,
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'Raleway-Medium',
    marginBottom: 30,
  },
  firstInput: {
    marginBottom: 15,
  },
  forgotText: {
    textAlign: 'right',
    color: TextColor,
    marginTop: 10,
    fontFamily: 'Montserrat-Medium',
    textDecorationLine: 'underline',
  },
  haveAccount: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: TextColor,
    textAlign: 'center',
    marginTop: 30,
  },
  goToReg: {
    color: ButtonColor,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    marginBottom: 20
  },
});
