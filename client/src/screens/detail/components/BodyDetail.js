import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';
import {addToCartPending} from '../../../redux/slice/cartSlice';
import {moneyFormat} from '../../../utils/format';

export default function BodyDetail({product}) {
  const dispatch = useDispatch();

  const ButtonBuy = ({data}) => {
    return (
      <TouchableOpacity
        style={styles.BuyBox}
        onPress={() => addToCartPress(product, data)}>
        <View style={styles.BodyBox}>
          <Image source={{uri: data.image}} style={styles.BodyImage} />
          <Text style={styles.BodyText}>{data.name}</Text>
        </View>

        <View style={styles.PriceBox}>
          <Text style={styles.PriceText}>
            {moneyFormat(data.price)}
            <Text style={styles.UnitMoney}>đ</Text>
          </Text>
          <View style={styles.BuyButton}>
            <Text style={styles.BuyText}>MUA</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const addToCartPress = (product, unit) => {
    dispatch(addToCartPending({product, unit}));
  };
  return (
    <View style={styles.Container}>
      <Text style={styles.DetailText}>
        <Text style={styles.NameText}>{product.name}</Text> {product.detail}
      </Text>
      <View style={styles.FlatListBox}>
        <FlatList
          data={product.unit.detail}
          keyExtractor={(item, index) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <ButtonBuy data={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  NameText: {
    fontFamily: appFont.Medium,
  },
  DetailText: {
    fontFamily: appFont.Regular,
  },

  FlatListBox: {
    marginBottom: 5,
  },

  BuyBox: {
    height: 70,
    width: 130,
    borderWidth: 1,
    borderColor: appColor.primary,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 5,
  },
  BodyBox: {
    flexDirection: 'row',
    padding: 5,
    paddingHorizontal: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: appColor.border,
    borderBottomWidth: 1,
  },
  BodyImage: {
    width: 20,
    height: 20,
  },
  BodyText: {
    fontFamily: appFont.Regular,
    marginLeft: 7,
    fontSize: 14,
  },

  PriceBox: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    height: 38,
    justifyContent: 'center',
  },
  PriceText: {
    fontFamily: appFont.Regular,
    fontSize: 13,
  },
  UnitMoney: {
    textDecorationLine: 'underline',
  },
  BuyButton: {
    marginLeft: 5,
    paddingLeft: 5,
    borderLeftColor: appColor.border,
    borderLeftWidth: 1,
  },
});
