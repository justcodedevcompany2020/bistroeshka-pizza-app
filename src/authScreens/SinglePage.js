import React, {useState} from 'react';
import Wrapper from './../../components/fixedElements/Wrapper';
import Slider from '../../components/slider/slider';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextColor} from '../../components/colors/colors';
import {LikedProduct, NoLikedProduct} from '../../components/icons/includeSvg';
import {ChangeCount} from '../../components/buttons/changeCount';
import SmallButton from './../../components/buttons/smallButton';
import {useNavigation} from '@react-navigation/native';
const data = [
  require('../../assets/images/pica.png'),
  require('../../assets/images/pica.png'),
  require('../../assets/images/pica.png'),
  require('../../assets/images/pica.png'),
  require('../../assets/images/pica.png'),
];

export default SinglePage = ({}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);
  const navigation = useNavigation();

  return (
    <Wrapper
      leftIcon={true}
      title={'Пеперони'}
      goBack={() => navigation.goBack()}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Slider data={data} />

        <View style={styles.productTypeParent}>
          <View>
            <Text style={styles.productType}>Пицца</Text>
            <Text style={styles.productName}>ПЕПЕРОНИ</Text>
            <View style={styles.gramPrice}>
              <Text style={styles.price}>490 ₽</Text>
              <Text style={styles.gram}>800г</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            {isLiked ? <LikedProduct /> : <NoLikedProduct />}
          </TouchableOpacity>
        </View>
        <View style={styles.buttonParent}>
          <ChangeCount
            height={45}
            width={'49%'}
            count={count}
            setCountPlus={() => setCount(count + 1)}
            setCountMinus={() => setCount(count - 1)}
          />
          <SmallButton buttonText={'В корзину'} />
        </View>
        <Text style={styles.information}>
          Классический состав пиццы в котором нет ничего лишнего: пряные
          колбаски пепперони с легкой перчинкой, сыр моцарелла со сливочным
          вкусом и нежный томатный соус. Основание пиццы на традиционном тонком
          итальянском тесте с пряным томатным соусом для пиццы, который мы варим
          с добавлением итальянских трав и специй.
        </Text>
        <Text style={styles.compound}>Состав:</Text>
        <Text style={styles.compoundItems}>
          пеперони, помидор, моцералла, орегана, красный соус.
        </Text>
      </ScrollView>
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  productTypeParent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productType: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#868686',
    marginBottom: 4,
  },
  productName: {
    fontFamily: 'Montserrat-SemiBold',
    color: TextColor,
    fontSize: 18,
    marginBottom: 5,
  },
  gramPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  price: {
    color: TextColor,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
  },
  gram: {
    color: '#868686',
    fontSize: 13,
  },
  buttonParent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  information: {
    fontFamily: 'OpenSans-Regular',
    color: '#868686',
    marginTop: 20,
    fontSize: 14,
  },
  compound: {
    color: TextColor,
    marginTop: 10,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  compoundItems: {
    color: '#868686',
    marginTop: 5,
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
});
