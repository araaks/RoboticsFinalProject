import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Kai sucks</Text>
      <Pressable onPress={() => Alert.alert('Change Job Button Pressed')}>
          <Text>changeJob</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
