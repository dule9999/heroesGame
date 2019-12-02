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
    openHeroSelection = () => {
        if (this.props.location.pathname !== '/heroSelection') {
            this.props.history.push({ pathname: '/heroSelection' })
        }
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.startNewGameHolder}>
                    <TouchableOpacity
                        style={styles.startNewGameTouch}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        onPress={this.openHeroSelection}
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