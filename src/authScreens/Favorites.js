import {useState} from 'react';
import Wrapper from './../../components/fixedElements/Wrapper';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FavoriteRenders} from '../../components/favoriteRenders/favoriteRenders';
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

export default Favorites = ({}) => {
  const [add_remove_beg, setAddBeg] = useState();
  const [add_remove_favorite, setAddFavorite] = useState();
  const navigation = useNavigation();
  const renderItem = ({item, index}) => {
    return (
      <FavoriteRenders
        add_remove_beg={add_remove_beg}
        addBeg={() => setAddBeg(!add_remove_beg)}
        addFavorite={() => setAddFavorite(!add_remove_favorite)}
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
      title={'Избранные'}
      bottomLine={true}
      navigation={() => navigation.goBack()}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
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
