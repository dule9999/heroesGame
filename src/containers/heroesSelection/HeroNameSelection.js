import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { saveHeroProp } from '../../reducers/app'

const mapDispatchToProps = dispatch => {
    return {
        saveHeroProp: (prop) => dispatch(saveHeroProp(prop))
    }
}

class HeroNameSelection extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            heroName: ''
        }
    }

    goBackToHeroClassSelection = () => {
        this.props.history.goBack()
    }

    confirmHeroSelection = () => {
        let heroId = this.props.location.state.hero.id

        let heroName = { [`hero${heroId}name`]: this.state.heroName }
        let heroCls = { [`hero${heroId}cls`]: this.props.location.state.cls }

        this.props.saveHeroProp(heroName)
        this.props.saveHeroProp(heroCls)
        this.goToHeroesSelection()
    }

    goToHeroesSelection = () => {
        if (this.props.location.pathname !== '/heroesSelection') {
            this.props.history.push({ pathname: '/heroesSelection' })
        }
    }

    render() {
        return (
            <SafeAreaView style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: '#fff' }}>
                <ScrollView>
                    <View style={{ marginHorizontal: 10 }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row' }}
                            onPress={this.goBackToHeroClassSelection}
                        >
                            <View style={{ borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10, margin: 10 }}>
                                <Text style={{ fontSize: 20 }}>Go Back To Hero Class Selection</Text>
                            </View>
                        </TouchableOpacity>

                        <View>
                            <Text style={{ fontSize: 22, alignSelf: 'center', marginVertical: 10 }}>{this.props.location.state.hero.name}, {this.props.location.state.cls}</Text>
                        </View>

                        <TextInput
                            style={{ borderBottomWidth: 1, marginHorizontal: 10, fontSize: 20, borderBottomColor: '#ddd', marginBottom: 20, maxWidth: 200 }}
                            placeholder="Hero Name"
                            onChangeText={(val) => this.setState({ heroName: val })}
                            maxLength={20}
                        />

                        <TouchableOpacity
                            onPress={this.confirmHeroSelection}
                            style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 30 }}
                            disabled={!this.state.heroName}
                        >
                            <View style={{ paddingVertical: 10, paddingHorizontal: 10, backgroundColor: this.state.heroName ? 'mediumseagreen' : 'grey', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                                <Text style={{ fontSize: 20, color: '#fff' }}>Confirm</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

})

export default withRouter(connect(undefined, mapDispatchToProps)(HeroNameSelection))