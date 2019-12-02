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

    componentDidMount() {
    }

    render() {
        return (
            <SafeAreaView style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#fff' }}>
                <View>
                    <Text style={{ alignSelf: 'center', marginVertical: 10 }}>World Map</Text>
                </View>
                <View style={{ height: 600 }}>
                    <ScrollView horizontal>
                        <ImageBackground
                            style={{ height: 600, width: 700 }}
                            source={map}
                            imageStyle={{}}
                        >
                            <TouchableOpacity style={{ position: 'absolute', top: 230, left: 300 }}>
                                <Text style={{ color: '#fff' }}>White Eagle Pass</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </ScrollView>
                </View>


            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({

})

export default withRouter(Map)