import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { getColor } from '../utils/index';


export interface WF {
  samples: [];
  width: number;
  height: number;
}

interface WaveFormProps {
  waveform: WF;
  height: number;
  width: number;
  setTime: Function;
  percentPlayed: any;
  percentPlayable: any;
  inverse: any;
  active: any;
  activeInverse: any;
  activePlayable: any;
  activePlayableInverse: any;
  inactive: any;
  inactiveInverse: any;
}

const Waveform:React.FC<WaveFormProps> = (props) => {
  
  let _ = require('lodash')
  let scale = require('d3-scale');
  let array = require('d3-array');
  
  //const chunks: [] = _.chunk(props.waveform.samples, props.waveform.width / ((props.width - 60) / 3));

  const scaleLinearHeight = scale.scaleLinear()
    .domain([0, props.waveform.height])
    .range([0, props.height]);
  const chunks: [] = _.chunk(props.waveform.samples, props.waveform.width / 100);
  let waveformSamples: [] = [];
  

  if (chunks.length >= 100) {
    for (let i = 0; i < 100; i++) {
      waveformSamples.push(chunks[i]);
    }
  } else {
    
    for (let i = 0; i < 100 - chunks.length; i++) {
      waveformSamples.push(chunks[chunks.length - (i + 1)]);
    }
  }

  return (
    <View style={[{
      height: props.height,
      width: props.width,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    props.inverse && {
      transform: [
        { rotateX: '180deg' },
        { rotateY: '0deg' },
      ],
    },
    ]}
    >
      {waveformSamples.map((chunk, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => {
            props.setTime(i);
          }}
        >
          <View style={{
            backgroundColor: getColor({
              bars: waveformSamples,
              bar: i,
              percentPlayed: props.percentPlayed,
              percentPlayable: props.percentPlayable,
              inverse: props.inverse,
              ACTIVE: props.active,
              ACTIVE_INVERSE: props.activeInverse,
              ACTIVE_PLAYABLE: props.activePlayable,
              ACTIVE_PLAYABLE_INVERSE: props.activePlayableInverse,
              INACTIVE: props.inactive,
              INACTIVE_INVERSE: props.inactiveInverse
            }),
            width: props.width / 100 - 1,
            marginRight: 1,
            height: scaleLinearHeight(i % 3 == 0 ? array.min(chunk) : i % 3 == 1 ? array.mean(chunk) : array.max(chunk)),
          }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Waveform;