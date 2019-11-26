import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import HeroAvatarInBottomMenu from '../../components/heroAvatarInBottomMenu/HeroAvatarInBottomMenu';

const heroAvatarImages = {
    hero1: require('../../../assets/images/hero1avatar.jpg'),
    hero2: require('../../../assets/images/hero2avatar.jpg'),
    hero3: require('../../../assets/images/hero3avatar.jpg'),
    hero4: require('../../../assets/images/hero4avatar.jpg'),
}

const mapStateToProps = state => {
    return {
        hero1name: state.app.hero1name,
        hero2name: state.app.hero2name,
        hero3name: state.app.hero3name,
        hero4name: state.app.hero4name
    };
};


class BottomHeroMenu extends React.PureComponent {
    render() {
        let { hero1name, hero2name, hero3name, hero4name } = this.props
        let allHeroes = [
            { name: hero1name, id: 1, img: heroAvatarImages.hero1 },
            { name: hero2name, id: 2, img: heroAvatarImages.hero2 },
            { name: hero3name, id: 3, img: heroAvatarImages.hero3 },
            { name: hero4name, id: 4, img: heroAvatarImages.hero4 },
        ]

        return (
            <View style={styles.bottomHeroMenuHolder}>
                {
                    allHeroes && allHeroes.length && allHeroes.map((hero, i) => {
                        return (
                            <HeroAvatarInBottomMenu key={i} hero={hero} />
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomHeroMenuHolder: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 5
    }
})

export default withRouter(connect(mapStateToProps, undefined)(BottomHeroMenu))