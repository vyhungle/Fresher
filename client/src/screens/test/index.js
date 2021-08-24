import axios from 'axios';
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import SingleItemCard from '../../screens/home/components/SingleItemCard';

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      products: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      'https://api-bhx.herokuapp.com/products?_limit=6',
    );
    this.setState({
      products: response.data,
      isLoading: false,
    });
  }

  componentWillUnmount() {
    console.log('Unmount');
  }

  render() {
    if (this.state.isLoading) {
      return <Text>Loading...</Text>;
    }
    return (
      <View style={styles.ProductsBox}>
        {this.state.products.map((item, index) => (
          <View key={index}>
            <SingleItemCard product={item} categoryId={1} />
          </View>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ProductsBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
export default index;
