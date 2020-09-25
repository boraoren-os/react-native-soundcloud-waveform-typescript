import React from 'react';
import { StyleSheet, View } from 'react-native';
import SoundCloudWaveform from 'react-native-soundcloud-waveform-typescript'

declare const global: { HermesInternal: null | {} };

const App = () => {

  const setTime = (value: number) => {
    console.log(`value is ${value}`);
  }


  return (

    <View style={styles.container}>
      <SoundCloudWaveform waveformUrl="https://w1.sndcdn.com/PP3Eb34ToNki_m.png" setTime={setTime} percentPlayed={50} />
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
