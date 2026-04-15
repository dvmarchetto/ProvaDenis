import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor: 'red' }]} />
      <View style={[styles.box, {backgroundColor: 'yellow' }]} />
      <View style={[styles.box, {backgroundColor: 'blue' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box: {
    width: 100,
    height: 100,
  },
});