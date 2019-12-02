import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { withRouter } from "react-router";

class HeroSelection extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            firstHero: 'First Hero',
            secondHero: 'Second Hero',
            thirdHero: 'Third Hero',
            fourthHero: 'Fourth Hero'
        }
    }

    openChooseSingleHeroScreen = (hero) => {
        if (this.props.location.pathname !== '/chooseSingleHero') {
            this.props.history.push({ pathname: '/chooseSingleHero', state: hero })
        }
    }

    goBackToMenu = () => {
        this.props.history.goBack()
    }

    render() {
        let { firstHero, secondHero, thirdHero, fourthHero } = this.state
        let fourHeroes = [firstHero, secondHero, thirdHero, fourthHero]
        return (
            <SafeAreaView style={{ position: 'absolute', backgroundColor: '#fff', top: 0, bottom: 0, left: 0, right: 0 }}>
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
                        <Text style={{ fontSize: 24, alignSelf: 'center' }}>Hero Selection</Text>
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
                                        style={{ borderWidth: 1, paddingVertical: 10, paddingHorizontal: 15, width: 200, marginVertical: 10 }}
                                        onPress={() => this.openChooseSingleHeroScreen(hero)}
                                    >
                                        <Text style={{ alignSelf: 'center', fontSize: 20 }}>{hero}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

})

export default withRouter(HeroSelection)