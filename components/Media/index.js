import React from 'react';
import Video from 'react-native-video';
import styles from './media-styles';

export const Media = function(props){
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