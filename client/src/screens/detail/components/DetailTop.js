import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {constantsGlobal} from '../../../api/constants';
import {appColor} from '../../../assets/colors';
import {appFont} from '../../../assets/fonts';
import ArrowLeftIcon from '../../../assets/images/left-arrow.svg';
import ArrowRightIcon from '../../../assets/images/right-arrow.svg';

export default function DetailTop({product}) {
  const flatListRef = React.useRef();
  const [indexImage, setIndexImage] = React.useState(0);
  const navigation = useNavigation();

  const renderImage = (image, index) => {
    return (
      <Image style={styles.ProductImage} source={{uri: image}} key={index} />
    );
  };
  const onPressPrevious = () => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: indexImage === 0 ? product.images.length - 1 : indexImage - 1,
    });
  };

  const onPressNext = () => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: indexImage === product.images.length - 1 ? 0 : indexImage + 1,
    });
  };

  const onChangeImage = nativeEvent => {
    if (nativeEvent) {
      const index = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      setIndexImage(index);
    }
  };
  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={product.images}
        keyExtractor={(item, index) => item}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => renderImage(item)}
        onScroll={({nativeEvent}) => onChangeImage(nativeEvent)}
      />
      <TouchableOpacity
        onPress={() => onPressPrevious()}
        style={styles.ButtonPrevious}>
        <ArrowLeftIcon width={17} height={17} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPressNext()} style={styles.ButtonNext}>
        <ArrowRightIcon width={17} height={17} />
      </TouchableOpacity>

      <View style={styles.CountImageBox}>
        <Text style={styles.CountImageText}>
          {indexImage + 1}/{product.images.length}
        </Text>
      </View>

      <View style={styles.HSDBox}>
        <Text style={styles.HSDText}>{product.hsd}</Text>
      </View>

      <TouchableOpacity
        style={styles.BackBox}
        onPress={() => navigation.goBack()}>
        <ArrowLeftIcon width={17} height={17} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ProductImage: {
    width: constantsGlobal.with,
    height: 300,
  },
  ButtonPrevious: {
    height: 80,
    width: 40,
    backgroundColor: appColor.buttonOpacity,
    position: 'absolute',
    top: 110,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonNext: {
    height: 80,
    width: 40,
    backgroundColor: appColor.buttonOpacity,
    position: 'absolute',
    top: 110,
    right: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  CountImageBox: {
    backgroundColor: appColor.buttonOpacity,
    padding: 2,
    borderRadius: 10,
    width: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 270,
    right: 7,
  },
  CountImageText: {
    color: 'white',
    fontFamily: appFont.Medium,
    fontSize: 14,
  },

  BackBox: {
    backgroundColor: appColor.buttonOpacity,
    height: 35,
    width: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    position: 'absolute',
    top: 10,
    left: 10,
  },

  HSDBox: {
    backgroundColor: appColor.buttonOpacity,
    padding: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 270,
    left: 7,
  },
  HSDText: {
    color: 'white',
    fontFamily: appFont.Medium,
    fontSize: 14,
  },
});
