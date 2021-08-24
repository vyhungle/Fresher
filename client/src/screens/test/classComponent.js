import axios from 'axios';
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import SingleItemCard from '../../screens/home/components/SingleItemCard';

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      products: [],
      count: 0,
      update: false,
    };
  }

  async componentDidMount() {
    console.log('Mounting');
    const response = await axios.get(
      'https://api-bhx.herokuapp.com/products?_limit=6',
    );
    this.setState({
      products: response.data,
      isLoading: false,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Did update', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('UnMounting');
  }

  render() {
    if (this.state.isLoading) {
      return <Text>Loading...</Text>;
    }
    return (
      <View>
        <View>
          <Text>count: {this.state.count}</Text>
          <TouchableOpacity
            onPress={() => this.setState({count: this.state.count + 1})}>
            <Text>count++</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ProductsBox}>
          {this.state.products.map((item, index) => (
            <View key={index}>
              <SingleItemCard product={item} categoryId={1} />
            </View>
          ))}
        </View>
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
