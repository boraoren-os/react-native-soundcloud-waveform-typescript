import * as React from 'react';
import { View } from 'react-native';
import Waveform from './components/Waveform';
import { dimensionsWidth } from './utils/index';
import { useState } from 'react';
import { useEffect } from 'react';

import { WF } from './components/Waveform'

interface SoundCloudWaveformProps {
    waveformUrl: string;
    height: number,
    width: number,
    percentPlayed: number,
    percentPlayable: number,
    setTime: Function,
    active: string,
    activeInverse: string,
    activePlayable: string,
    activePlayableInverse: string,
    inactive: string,
    inactiveInverse: string,
}

const SoundCloudWaveform = (props: SoundCloudWaveformProps) => {

    const [waveform, setWaveform] = useState<WF>()

    useEffect(() => {
        fetch(props.waveformUrl.replace('png', 'json'))
            .then(res => res.json())
            .then(json => {
                setWaveform(json);
            });
    },[])


    if (!waveform) return null;

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginTop: 50,
            }}>
            <Waveform
                waveform={waveform}
                height={props.height}
                width={props.width}
                setTime={props.setTime}
                percentPlayed={props.percentPlayed}
                percentPlayable={props.percentPlayable}
                active={props.active}
                activeInverse={props.activeInverse}
                activePlayable={props.activePlayable}
                activePlayableInverse={props.activePlayableInverse}
                inactive={props.inactive}
                inactiveInverse={props.inactiveInverse}
                inverse
            />
            <View
                style={{
                    width: props.width,
                    height: 2,
                    backgroundColor: 'black',
                }}
            />

            <Waveform
                waveform={waveform}
                height={props.height / 2}
                width={props.width}
                setTime={props.setTime}
                percentPlayed={props.percentPlayed}
                percentPlayable={props.percentPlayable}
                active={props.active}
                activeInverse={props.activeInverse}
                activePlayable={props.activePlayable}
                activePlayableInverse={props.activePlayableInverse}
                inactive={props.inactive}
                inactiveInverse={props.inactiveInverse}
                inverse={false}
            />

        </View>
    );
}

SoundCloudWaveform.defaultProps = {
    percentPlayable: 0,
    height: 50,
    width: dimensionsWidth,
    active: '#FF1844',
    activeInverse: '#4F1224',
    activePlayable: '#1b1b26',
    activePlayableInverse: '#131116',
    inactive: '#424056',
    inactiveInverse: '#1C1A27',
};

export default SoundCloudWaveform;