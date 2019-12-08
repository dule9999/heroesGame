import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native'
import { withRouter } from "react-router";

const map = require('../../../assets/images/map.jpg')

class Map extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <SafeAreaView style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#fff' }}>
                <ImageBackground
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                    source={map}
                    imageStyle={{}}
                    resizeMode={'stretch'}
                >
                    <TouchableOpacity style={{ position: 'absolute', top: 230, left: 300 }}>
                        <Text style={{ color: '#fff' }}>White Eagle Pass</Text>
                    </TouchableOpacity>
                </ImageBackground>


            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({

})

export default withRouter(Map)