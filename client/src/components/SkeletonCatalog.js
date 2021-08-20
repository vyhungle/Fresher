import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';

export default function SkeletonCatalog(props) {
  return (
    <View>
      <ContentLoader
        speed={1}
        width={70}
        height={50}
        backgroundColor="#f5fbf4"
        foregroundColor="#eaf9e1"
        {...props}>
        <Rect x="0" y="0" rx="5" ry="5" width={70} height={50} />
      </ContentLoader>
    </View>
  );
}

const styles = StyleSheet.create({});
