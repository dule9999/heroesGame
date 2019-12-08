import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { withRouter } from "react-router";

const mapStateToProps = state => {
    return {
        hero1name: state.app.hero1name,
        hero1id: state.app.hero1id,
        hero1cls: state.app.hero1cls,
        hero2name: state.app.hero2name,
        hero2id: state.app.hero2id,
        hero2cls: state.app.hero2cls,
        hero3name: state.app.hero3name,
        hero3id: state.app.hero3id,
        hero3cls: state.app.hero3cls,
        hero4name: state.app.hero4name,
        hero4id: state.app.hero4id,
        hero4cls: state.app.hero4cls
    }
}

class HeroesSelection extends React.PureComponent {
    openChooseHeroClassScreen = (hero) => {
        if (this.props.location.pathname !== '/heroClassSelection') {
            this.props.history.push({ pathname: '/heroClassSelection', state: hero })
        }
    }

    goBackToMenu = () => {
        if (this.props.location.pathname !== '/') {
            this.props.history.push({ pathname: '/' })
        }
    }

    goToDungeonsList = () => {
        if (this.props.location.pathname !== '/dungeonsList') {
            this.props.history.push({ pathname: '/dungeonsList' })
        }
    }

    render() {
        let fourHeroes = [
            { name: this.props.hero1name, id: this.props.hero1id, cls: this.props.hero1cls },
            { name: this.props.hero2name, id: this.props.hero2id, cls: this.props.hero2cls },
            { name: this.props.hero3name, id: this.props.hero3id, cls: this.props.hero3cls },
            { name: this.props.hero4name, id: this.props.hero4id, cls: this.props.hero4cls },
        ]
        console.log(fourHeroes)

        let startAdventureDisabled = !this.props.hero1cls || !this.props.hero2cls || !this.props.hero3cls || !this.props.hero4cls

        return (
            <SafeAreaView style={{ position: 'absolute', backgroundColor: '#fff', top: 0, bottom: 0, left: 0, right: 0 }}>
                <ScrollView >
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={this.goBackToMenu}
                    >
                        <View style={{ borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10, margin: 10 }}>
                            <Text style={{ fontSize: 20 }}>Go Back To Menu</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: 24, alignSelf: 'center' }}>Heroes Selection</Text>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ alignSelf: 'center', fontSize: 16 }}>Choose 4 heroes to start your adventure!</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            {
                                fourHeroes.map((hero, i) => {
                                    return (
                                        <TouchableOpacity
                                            key={i}
                                            style={{ borderWidth: 1, paddingVertical: 10, paddingHorizontal: 15, width: 300, marginVertical: 10 }}
                                            onPress={() => this.openChooseHeroClassScreen(hero)}
                                        >
                                            <Text
                                                numberOfLines={1}
                                                ellipsizeMode={'tail'}
                                                style={{ alignSelf: 'center', fontSize: 20 }}
                                            >
                                                {hero.name}{hero.cls ? ', ' + hero.cls : ''}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={this.goToDungeonsList}
                        disabled={startAdventureDisabled}
                        style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 30 }}
                    >
                        <View
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 10,
                                backgroundColor: startAdventureDisabled ? 'grey' : 'mediumseagreen',
                                borderTopLeftRadius: 10,
                                borderBottomLeftRadius: 10,
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10
                            }}
                        >
                            <Text style={{ fontSize: 20, color: '#fff' }}>Start your adventure!</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

})

export default withRouter(connect(mapStateToProps, undefined)(HeroesSelection))