import Wrapper from './../../components/fixedElements/Wrapper';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import EditInput from '../../components/inputs/editInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BigButton from './../../components/buttons/bigButton';
import {useState} from 'react';
const {width} = Dimensions.get('window');

export default EditAddress = ({}) => {
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [editAddress, setEditAddress] = useState(false);
  return (
    <Wrapper
      leftIcon={true}
      rightIcon={false}
      title={'Адреса доставки'}
      bottomLine={true}
      goBack={() =>
        navigation.navigate('TabNavigation', {
          screen: 'ProfileStack',
        })
      }>
      <KeyboardAwareScrollView>
        <EditInput
          keyboardType={'default'}
          isVerify={editAddress}
          edit={!editAddress}
          arrowRight={false}
          placeholder={'г. Москва ул. Внукого д.24 кв. 12'}
          editable={editAddress}
          delate={true}
          propsStyle={{marginBottom: 0}}
          onPress={() => setEditAddress(!editAddress)}
          // onChange={null}
          // value={''}
        />
        <EditInput
          keyboardType={'default'}
          isVerify={editAddress}
          edit={!editAddress}
          arrowRight={false}
          placeholder={'г. Москва ул. Внукого д.24 кв. 12'}
          editable={editAddress}
          delate={true}
          onPress={() => setEditAddress(!editAddress)}
          // onChange={null}
          // value={''}
        />

        <BigButton buttonText={'Добавить'} buttonStyle={{marginTop: 80}} />
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};
const styles = StyleSheet.create({});
