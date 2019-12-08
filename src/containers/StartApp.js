import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withRouter } from "react-router";
import { connect } from 'react-redux'
import { saveHeroProp } from '../reducers/app'

const mapDispatchToProps = dispatch => {
    return {
        saveHeroProp: (prop) => dispatch(saveHeroProp(prop))
    }
}

class StartApp extends React.PureComponent {
    openHeroesSelection = () => {
        this.props.saveHeroProp({ hero1name: 'First Hero' })
        this.props.saveHeroProp({ hero2name: 'Second Hero' })
        this.props.saveHeroProp({ hero3name: 'Third Hero' })
        this.props.saveHeroProp({ hero4name: 'Fourth Hero' })
        this.props.saveHeroProp({ hero1cls: '' })
        this.props.saveHeroProp({ hero2cls: '' })
        this.props.saveHeroProp({ hero3cls: '' })
        this.props.saveHeroProp({ hero4cls: '' })
        if (this.props.location.pathname !== '/heroesSelection') {
            this.props.history.push({ pathname: '/heroesSelection' })
        }
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.startNewGameHolder}>
                    <TouchableOpacity
                        style={styles.startNewGameTouch}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        onPress={this.openHeroesSelection}
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

export default withRouter(connect(undefined, mapDispatchToProps)(StartApp))