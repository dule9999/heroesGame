import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { withRouter } from "react-router";

class HeroAvatarInBottomMenu extends React.PureComponent {
    openHeroInfo = id => {
        if (this.props.location.pathname !== `/heroInfo/${id}`) {
            this.props.history.push({ pathname: `/heroInfo/${id}`, state: id })
        }
    }

    render() {
        return (
            <View style={styles.heroAvatarHolder}>
                <TouchableOpacity onPress={() => { this.openHeroInfo(this.props.hero.id) }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Image style={styles.heroAvatarImage} source={this.props.hero.img} />
                    <Text style={styles.heroAvatarName}>{this.props.hero.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heroAvatarHolder: {
        borderWidth: 1,
        padding: 5,
        flex: 1,
        marginHorizontal: 5
    },
    heroAvatarImage: {
        height: 60,
        width: 60,
        alignSelf: 'center'
    },
    heroAvatarName: {
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})

export default withRouter(HeroAvatarInBottomMenu)