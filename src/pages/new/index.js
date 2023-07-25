import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function New() {
  return (
    <View style={styles.container}>
      <Text>New</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
