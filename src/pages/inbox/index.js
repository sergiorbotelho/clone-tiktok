import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Inbox() {
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
