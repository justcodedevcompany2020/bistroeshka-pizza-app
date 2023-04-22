import React, {useState} from 'react';
import Wrapper from '../../components/fixedElements/Wrapper';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {CatalogRenders} from '../../components/catalogRenders/catalogRenders';
import {SearchInput} from '../../components/inputs/searchInput';
import {SubCategory} from '../../components/catalogRenders/subCategory';
import FilterBox from '../../components/filterBox/filterBox';
import {useNavigation} from '@react-navigation/native';
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

const subCategory = [
  'Пицца',
  'Лапша',
  'Закуски',
  'Десперты',
  'Пицца',
  'Лапша',
  'Закуски',
  'Десперты',
  'Пицца',
  'Лапша',
  'Закуски',
  'Десперты',
  'Пицца',
  'Лапша',
  'Закуски',
  'Десперты',
  'Пицца',
  'Лапша',
  'Закуски',
  'Десперты',
  'Пицца',
  'Лапша',
  'Закуски',
  'Десперты',
];

export default Catalog = () => {
  const [open_filter, setOpenFilter] = useState(false);
  const [add_remove_beg, setAddBeg] = useState(false);
  const [add_remove_favorite, setAddFavorite] = useState(false);
  const navigation = useNavigation();
  const renderItem = ({item, index}) => {
    return (
      <CatalogRenders
        add_remove_beg={add_remove_beg}
        add_remove_favorite={add_remove_favorite}
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
      title={'Каталог'}
      leftIcon={true}
      rightIcon={true}
      openFilter={() => setOpenFilter(true)}>
      <FilterBox isOpen={open_filter} setOpen={() => setOpenFilter(false)} />
      <SearchInput />
      <View style={styles.subCategoryParent}>
        <ScrollView horizontal>
          {subCategory.map((item, index) => {
            return <SubCategory text={item} isActive={false} key={index} />;
          })}
        </ScrollView>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  subCategoryParent: {
    marginTop: 20,
    marginBottom: 15,
  },
});
