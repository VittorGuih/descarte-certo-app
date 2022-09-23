import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MyMap } from './Map';
import { AppTitle } from './Title';
export const MapView = () => {
  return (
    <View style={styles.container}>
      <AppTitle />
      <MyMap />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
