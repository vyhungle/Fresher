import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';
import {pagePending, productPending} from '../../../redux/slice/productsSlice';
import DownIcon from '../../../assets/images/arrowDownIcon.svg';

import ListSkeletonCard from '../../../components/ListSkeletonCard';
import SingleItemCard from './SingleItemCard';

export default function ListCardCatagory(props) {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(2);
  React.useEffect(() => {
    dispatch(productPending({id: props.category.id, page: 1}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showMore = () => {
    setPage(old => old + 1);
    dispatch(pagePending({id: props.category.id, page: page}));
  };

  const findIndex = () => {
    return products.listProducts.findIndex(x => x.id === props.category.id);
  };

  const isSubLoading = () => {
    const index = products.isPage.findIndex(x => x.id === props.category.id);
    if (index >= 0) {
      return products.isPage[index].isLoading;
    }
    return false;
  };
  const getIsLoading = () => {
    const index = products.loading.findIndex(x => x.id === props.category.id);
    if (index >= 0) {
      return products.loading[index].isLoading;
    }
    return true;
  };
  if (getIsLoading()) {
    return <ListSkeletonCard />;
  }
  return (
    <View>
      <FlatList
        data={products.listProducts[findIndex()]?.products}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <SingleItemCard product={item} categoryId={props.category.id} />
        )}
        numColumns={3}
        contentContainerStyle={{paddingLeft: 2.5}}
        showsVerticalScrollIndicator={false}
      />
      {isSubLoading() && (
        <ActivityIndicator size="small" color={appColor.primary} />
      )}

      <TouchableOpacity style={styles.ShowMoreBox} onPress={() => showMore()}>
        <Text style={styles.ShowMoreText}>
          Xem thêm sản phẩm hàng hóa{' '}
          <Text style={styles.ShowMoreTitle}>{props.category.name}</Text>
        </Text>
        <DownIcon width={7} height={7} style={styles.ShowMoreIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ShowMoreBox: {
    borderColor: appColor.primary,
    borderWidth: 1,
    margin: 5,
    height: 45,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  ShowMoreText: {
    fontFamily: appFont.Regular,
    color: appColor.primary,
    fontSize: 13,
  },
  ShowMoreTitle: {
    fontFamily: appFont.Medium,
  },
  ShowMoreIcon: {
    marginLeft: 3,
    top: 1.5,
  },
});
