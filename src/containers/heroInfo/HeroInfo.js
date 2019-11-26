import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'
import { withRouter } from "react-router";

const heroAvatarImages = {
    hero1: require('../../../assets/images/hero1avatar.jpg'),
    hero2: require('../../../assets/images/hero2avatar.jpg'),
    hero3: require('../../../assets/images/hero3avatar.jpg'),
    hero4: require('../../../assets/images/hero4avatar.jpg'),
}

const mapStateToProps = state => {
    return {
        hero1name: state.app.hero1name,
        hero1weapon: state.app.hero1weapon,
        hero1armor: state.app.hero1armor,
        hero1stats: state.app.hero1stats,
        hero2name: state.app.hero2name,
        hero2weapon: state.app.hero2weapon,
        hero2armor: state.app.hero2armor,
        hero2stats: state.app.hero2stats,
        hero3name: state.app.hero3name,
        hero3weapon: state.app.hero3weapon,
        hero3armor: state.app.hero3armor,
        hero3stats: state.app.hero3stats,
        hero4name: state.app.hero4name,
        hero4weapon: state.app.hero4weapon,
        hero4armor: state.app.hero4armor,
        hero4stats: state.app.hero4stats
    };
};

class HeroInfo extends React.PureComponent {
    goBack = () => {
        this.props.history.goBack()
    }

    render() {
        let heroId = this.props.history.location.state
        let heroImg = heroAvatarImages['hero' + heroId]
        let heroName = this.props['hero' + heroId + 'name']
        let weapon = this.props['hero' + heroId + 'weapon']
        let armor = this.props['hero' + heroId + 'armor']
        let stats = this.props['hero' + heroId + 'stats']
        return (
            <SafeAreaView style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#fff' }}>
                <TouchableOpacity onPress={this.goBack} style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, marginVertical: 20, marginLeft: 10, borderWidth: 1, padding: 5 }}>{'<'} Go Back</Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>Hero Info</Text>
                <Image style={styles.heroAvatarImage} source={heroImg} />
                <Text style={styles.heroTextInfo}>Name: {heroName}</Text>
                <Text style={styles.heroTextInfo}>Weapon: {weapon.name} +{weapon.dmg}</Text>
                <Text style={styles.heroTextInfo}>Armor: {armor.name} +{armor.defense}</Text>
                <Text style={{ marginTop: 20, alignSelf: 'center', fontSize: 24 }}>Hero Stats</Text>
                <Text style={styles.heroTextInfo}>Strength: {stats.str}</Text>
                <Text style={styles.heroTextInfo}>Dexterity: {stats.dex}</Text>
                <Text style={styles.heroTextInfo}>Intelligence: {stats.int}</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    heroAvatarImage: {
        height: 100,
        width: 100
    },
    heroTextInfo: {
        fontSize: 20
    }
})

export default withRouter(connect(mapStateToProps, undefined)(HeroInfo))