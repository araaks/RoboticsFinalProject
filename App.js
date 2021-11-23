import React from 'react';
import { StyleSheet, Text, View, Pressable, Button, Dimensions, Alert } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <>
            <View style={styles.container}>
                {/* VIDEO PLAYER */}
                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View>
            {/* CONTROL BUTTONS */}
            {/* <div class="set wire">
                <nav class="d-pad">
                    <a class="up" href="#"></a>
                    <a class="right" href="#"></a>
                    <a class="down" href="#"></a>
                    <a class="left" href="#"></a>
                </nav>
            </div> */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        // alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    buttonContainer: {
        flex: 1,
        position: 'absolute'
    },
    video: {
        alignSelf: 'center',
        width: windowWidth,
        height: windowHeight,
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#b7b7b7',
        marginBottom: 30,
    },
});