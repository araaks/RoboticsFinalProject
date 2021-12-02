import React from 'react';
import { StyleSheet, Text, View, Pressable, Button, Dimensions, Alert } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    //testing to get data from backend server
    componentDidMount() {
        axios
            .get('192.168.1.212:3000/hello')
            .then((res) => {
                console.log("Connection Successful");
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    render() {
        // const video = React.useRef(null);
        // const[status, setStatus] = React.useState({ });
        return (
            <>
                <View style={styles.container}>
                    <Video
                        ref={r => (this.vid = r)}
                        source={{
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        rate={1.0}
                        volume={1.0}
                        muted={false}
                        resizeMode="cover"
                        useNativeControls
                        repeat
                        style={{ width: 300, height: 300 }}
                        onFullscreenUpdate={e => {
                            this.setState({ fullscreen: true });
                            console.log(e);
                        }}
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
        )
    }
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