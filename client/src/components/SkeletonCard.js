import React from 'react';
import {Text, View} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {constantsGlobal} from '../api/constants';

const SkeletonCard = props => (
  <View>
    <ContentLoader
      speed={1}
      width={constantsGlobal.withCard}
      height={constantsGlobal.heightCard}
      backgroundColor="#f5fbf4"
      foregroundColor="#eaf9e1"
      {...props}>
      <Rect
        x="0"
        y="0"
        rx="10"
        ry="10"
        width={constantsGlobal.withCard}
        height={constantsGlobal.heightCard}
      />
    </ContentLoader>
  </View>
);

export default SkeletonCard;
