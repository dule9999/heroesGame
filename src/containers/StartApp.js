import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withRouter } from "react-router";

class StartApp extends React.PureComponent {
    openFirstLocation = () => {
        if (this.props.location.pathname !== '/location/0') {
            this.props.history.push({ pathname: '/location/0' })
        }
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.startNewGameHolder}>
                    <TouchableOpacity
                        style={styles.startNewGameTouch}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        onPress={this.openFirstLocation}
                    >

                        <Text style={styles.startNewGameText}>Start New Game</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    startNewGameHolder: {
        marginTop: 20,
        alignItems: 'center'
    },
    startNewGameTouch: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#000',
        marginHorizontal: 20,
        width: 200,
        marginTop: 20
    },
    startNewGameText: {
        fontSize: 20,
        textAlign: 'center'
    }
})

export default withRouter(StartApp)