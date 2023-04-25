import {useState} from 'react';
import Wrapper from './../../components/fixedElements/Wrapper';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BegRenderedItems} from '../../components/begRenderedItems/begRenderedItems';
import BigButton from './../../components/buttons/bigButton';
import SuccessModal from './../../components/modals/sccessModal';
const {width} = Dimensions.get('window');
let data = [
  {
    image: require('../../assets/images/pica.png'),
    title: 'ПЕПЕРОНИ',
    price: 350,
    gram: 800,
    info: 'Пицца четвертинками с ветчиной, цыпленком, томатами, брынзой, моцареллой, фирменным соусом альфредо',
  },
  {
    image: require('../../assets/images/pica.png'),
    title: 'ПЕПЕРОНИ',
    price: 350,
    gram: 800,
    info: 'Пицца четвертинками с ветчиной, цыпленком, томатами, брынзой, моцареллой, фирменным соусом альфредо',
  },
  {
    image: require('../../assets/images/pica.png'),
    title: 'ПЕПЕРОНИ',
    price: 350,
    gram: 800,
    info: 'Пицца четвертинками с ветчиной, цыпленком, томатами, брынзой, моцареллой, фирменным соусом альфредо',
  },
  {
    image: require('../../assets/images/pica.png'),
    title: 'ПЕПЕРОНИ',
    price: 350,
    gram: 800,
    info: 'Пицца четвертинками с ветчиной, цыпленком, томатами, брынзой, моцареллой, фирменным соусом альфредо',
  },
  {
    image: require('../../assets/images/pica.png'),
    title: 'ПЕПЕРОНИ',
    price: 350,
    gram: 800,
    info: 'Пицца четвертинками с ветчиной, цыпленком, томатами, брынзой, моцареллой, фирменным соусом альфредо',
  },
  {
    image: require('../../assets/images/pica.png'),
    title: 'ПЕПЕРОНИ',
    price: 350,
    gram: 800,
    info: 'Пицца четвертинками с ветчиной, цыпленком, томатами, брынзой, моцареллой, фирменным соусом альфредо',
  },
];

export default BegPage = ({}) => {
  const [modal_visible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <BegRenderedItems
        navigation={() => navigation.navigate('SinglePage')}
        image={item.image}
        title={item.title}
        price={item.price}
        gram={item.gram}
        info={item.info}
      />
    );
  };

  return (
    <Wrapper
      leftIcon={false}
      rightIcon={false}
      title={'Корзина'}
      bottomLine={true}
      navigation={() => navigation.goBack()}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        ListFooterComponent={() => (
          <BigButton
            buttonStyle={{margin: 40}}
            buttonText={'Оформить заказ'}
            navigation={() => setModalVisible(true)}
          />
        )}
      />
      <View style={styles.bottomBarInfo}>
        <Text style={styles.productCount}>Количество: 4 шт.</Text>
        <View style={styles.priceParent}>
          <Text style={styles.priceText}>Товаров на</Text>
          <Text style={styles.price}>3500,65 Р</Text>
        </View>
      </View>
      <SuccessModal
        press={() => {
          navigation.navigate('Catalog');
          setModalVisible(false);
        }}
        visible={modal_visible}
        successText={'Заказ успешно принят'}
        buttonText={'В Каталог'}
      />
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  bottomBarInfo: {
    width: width,
    marginLeft: -20,
    borderTopWidth: 2,
    borderTopColor: '#F7F7F7',
    paddingVertical: 17,
    paddingHorizontal: 20,
  },
  productCount: {
    fontFamily: 'Montserrat-Medium',
    color: '#662916',
    fontSize: 12,
  },
  priceParent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  priceText: {
    color: '#662916',
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
  },
  price: {
    color: '#662916',
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
  },
});
