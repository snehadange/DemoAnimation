import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fade from './Fade';
import Infinite from './Infinite';
import ToggleAnm from './ToggleAnm';
import VideoPlayerDemo from './VideoplayerDemo';

export default function App() {
  return (
    <View style={styles.container}>
     
      <VideoPlayerDemo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
