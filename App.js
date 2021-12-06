import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
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

        var sendCycle = function () {
            axios
                .get(`192.168.1.212:3000/drive_direct/${right}/${left}`)
                .then((res) => {
                    console.log(`Sent: ${right}/${left}`);
                })

            setTimeout(function () {
                sendCycle();
            }, 600);
        };
    }



    render() {

        return (
            <>
                <View style={styles.container}>
                    {/* Vertical slider for tank controls of the robot */}
                    <BigSlider
                        trackStyle={{ backgroundColor: 'rgb(255, 166, 102)' }}
                        maximumValue={300}
                        minimumValue={-300}
                        value={this.state.left}
                        onValueChange={left => {
                            this.setState({ left })
                        }} />

                    <BigSlider
                        trackStyle={{ backgroundColor: 'rgb(255, 166, 102)' }}
                        maximumValue={300}
                        minimumValue={-300}
                        value={this.state.right}
                        onValueChange={right => {
                            this.setState({ right })
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