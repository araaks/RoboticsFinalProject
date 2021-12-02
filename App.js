import React from 'react';
import { StyleSheet, Text, View, Pressable, Button, Dimensions, Alert } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import VerticalSlider from 'rn-vertical-slider';
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
        return (
            <>
                <View style={styles.container}>
                    {/* <Video
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
                    /> */}

                    {/* Vertical slider for tank controls of the robot */}
                    <VerticalSlider
                        leftSpeed={1}
                        disabled={false}
                        min={0}
                        max={100}
                        onChange={(value) => {
                            console.log("CHANGE", leftSpeed);
                        }}
                        onComplete={(value) => {
                            console.log("COMPLETE", leftSpeed);
                        }}
                        width={50}
                        height={300}
                        step={1}
                        borderRadius={5}
                        minimumTrackTintColor={"gray"}
                        maximumTrackTintColor={"tomato"}
                        showBallIndicator
                        ballIndicatorColor={"gray"}
                        ballIndicatorTextColor={"white"}
                    />
                </View>
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
        position: 'absolute',
        marginLeft: 100
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