/* eslint import/no-unresolved: [2, { ignore: ['react-native'] }] */
import { Dimensions } from 'react-native';

interface ColorProps{
    bars:[];
    bar:number;
    percentPlayed:number;
    percentPlayable:number;
    inverse:boolean;
    ACTIVE:string;
    ACTIVE_INVERSE:string;
    ACTIVE_PLAYABLE:string;
    ACTIVE_PLAYABLE_INVERSE:string;
    INACTIVE:string;
    INACTIVE_INVERSE:string;
}

const getColor = (props:ColorProps) => {

  if (props.bar / props.bars.length < props.percentPlayed) {
    return props.inverse ? props.ACTIVE_INVERSE : props.ACTIVE;
  } if (props.bar / props.bars.length < props.percentPlayable) {
    return props.inverse ? props.ACTIVE_PLAYABLE_INVERSE : props.ACTIVE_PLAYABLE;
  }
  return props.inverse ? props.INACTIVE_INVERSE : props.INACTIVE;
}

const dimensionsWidth = Dimensions.get('window').width;

export { getColor, dimensionsWidth };