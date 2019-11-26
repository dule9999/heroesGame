import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { withRouter } from "react-router";
import { Link } from 'react-router-native'
import BottomHeroMenu from '../bottomHeroMenu/BottomHeroMenu';

class Location extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            locationName: null
        }

        this.locationsList = require('./location-list/location-list.json')
    }

    componentDidMount() {
        this.getLocationName(parseInt(this.props.match.params.id))
    }

    backToMenu = () => {
        if (this.props.location.pathname !== '/') {
            this.props.history.push({ pathname: '/' })
        }
    }

    getLocationName(locationId) {
        let location = this.locationsList.find(l => l.id === locationId)
        this.setState({ locationName: location.name })
    }

    render() {
        return (
            <SafeAreaView style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={styles.backToMenuTouch}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        onPress={this.backToMenu}
                    >
                        <Text style={styles.backToMenuText}>{'<'} Back to menu</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>


                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 24 }}>{this.state.locationName}</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-end', width: Dimensions.get('window').width }}>
                        <BottomHeroMenu />
                    </View>
                </View>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    backToMenuTouch: {
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 10,
        marginTop: 20,
        marginLeft: 10,
        padding: 10
    },
    backToMenuText: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default withRouter(Location)