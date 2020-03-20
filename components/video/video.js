import React from 'react';
import Video from 'react-native-video';
import styles from './video-styles.js';

export default function(props){
    return (
        <Video
            source={props.filename}
            rate={1.0}
            volume={1.0}
            muted={false}
            resizeMode={'cover'}
            repeat
            style={styles.video}
        />
    );
}