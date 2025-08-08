import React from 'react';
import {View, ViewProps} from 'react-native';

export default function Screen({style, ...rest}: ViewProps) {
  return <View style={[{flex: 1, padding: 16}, style]} {...rest} />;
}
