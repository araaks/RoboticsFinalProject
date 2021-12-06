import React, { Component } from 'react';
import { StyleSheet, Text, View, Pressable, Button, Dimensions, Alert } from 'react-native';
// import { Video, AVPlaybackStatus } from 'expo-av';
import BigSlider from 'react-native-big-slider';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { left: 0, right: 0 }
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
                    {/* <VerticalSlider
                        value={1}
                        disabled={false}
                        min={0}
                        max={100}
                        onChange={(value) => {
                            console.log("CHANGE", value);
                        }}
                        onComplete={(value) => {
                            console.log("COMPLETE", value);
                        }}
                        width={100}
                        height={300}
                        step={1}
                        borderRadius={10}
                        minimumTrackTintColor={"gray"}
                        maximumTrackTintColor={"tomato"}
                        showBallIndicator
                        ballIndicatorColor={"gray"}
                        ballIndicatorTextColor={"white"}
                    />
                    <VerticalSlider
                        value={1}
                        disabled={false}
                        min={0}
                        max={100}
                        onChange={(value) => {
                            console.log("CHANGE", value);
                        }}
                        onComplete={(value) => {
                            console.log("COMPLETE", value);
                        }}
                        width={100}
                        height={300}
                        step={1}
                        borderRadius={10}
                        minimumTrackTintColor={"gray"}
                        maximumTrackTintColor={"tomato"}
                        showBallIndicator
                        ballIndicatorColor={"gray"}
                        ballIndicatorTextColor={"white"}
                    /> */}
                    <BigSlider
                        trackStyle={{ backgroundColor: 'rgb(255, 166, 102)' }}
                        maximumValue={300}
                        minimumValue={-300}
                        value={this.state.left}
                        onValueChange={left => {
                            this.setState({ left })
                            console.log(`LEFT: ${left}`)
                        }} />

                    <BigSlider
                        trackStyle={{ backgroundColor: 'rgb(255, 166, 102)' }}
                        maximumValue={300}
                        minimumValue={-300}
                        value={this.state.right}
                        onValueChange={right => {
                            this.setState({ right })
                            console.log(`RIGHT: ${right}`)
                        }} />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ecf0f1',
        // alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        marginLeft: 100,
        marginTop: 50,
        flexDirection: 'row',
        alignContent: 'space-between',
        height: windowHeight - 90,
        width: windowWidth - 200
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