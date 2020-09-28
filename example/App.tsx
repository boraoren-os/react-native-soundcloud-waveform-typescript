import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SoundCloudWaveform from 'react-native-soundcloud-waveform-typescript';

declare const global: { HermesInternal: null | {} };

const App = () => {

  const [percentPlayed, setPercentPlayed] = useState(0.0);

  const setTime = (value: number) => {
    console.log(`value is ${value}`);
    setPercentPlayed(value);
  }


  return (

    <View style={styles.container}>
      <SoundCloudWaveform waveformUrl="https://w1.sndcdn.com/PP3Eb34ToNki_m.png"
                percentPlayable={0}
                setTime={setTime}
                active={'#454617'}
                percentPlayed={percentPlayed/100}
                height={50}
                activeInverse={'#e7e84e'}
                activePlayable='#1b1b26'
                activePlayableInverse='#131116'
                inactive='#424056'
                inactiveInverse='#1C1A27'
            />
      <Text />
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
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
