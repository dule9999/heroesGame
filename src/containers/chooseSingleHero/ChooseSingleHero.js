import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image,
    ScrollView
} from 'react-native'
import { withRouter } from "react-router";

const classesInfo = [
    {
        name: 'Zealot',
        desc: 'A holy warrior dressed in plate armor, sent by the gods to strike fear into the hearts of infidels. His faith gives him power to endure attacks and provide magical resistance to his companions.',
        img: require('../../../assets/images/classesAvatars/zealot.jpeg'),
        roles: 'Tank, Buffer'
    },
    {
        name: 'Trickster',
        desc: 'Illusions, smoke and deceit are trickster\'s tools. Useful to have in any group of adventurers, so that any attacker that tries his luck with them will be redirected, distracted or even poisoned.',
        img: require('../../../assets/images/classesAvatars/trickster.jpg'),
        roles: 'Debuffer, DPS'
    },
    {
        name: 'Witch Doctor',
        desc: 'A medicine man of the far tribes, who received passed down knowledge about herbal remedies and rituals of the old.',
        img: require('../../../assets/images/classesAvatars/witch-doctor.jpg'),
        roles: 'Heal, Buff, Debuff'
    },
    {
        name: 'Spellbinder',
        desc: 'Binding the elements of nature, fire, ice and storm, this class can seriously harm the group\'s opponents, sometimes even disintegrating them.',
        img: require('../../../assets/images/classesAvatars/spellbinder.jpg'),
        roles: 'DPS'
    },
    {
        name: 'Druid',
        desc: 'The communer with forest and mountain spirits, half human, half animal - the druid, is a versatile ally, that can take any role and be proficient in it.',
        img: require('../../../assets/images/classesAvatars/druid.jpg'),
        roles: 'Tank, DPS, Heal'
    },
    {
        name: 'Knight',
        desc: 'Knight Description',
        img: require('../../../assets/images/classesAvatars/knight.jpg'),
        roles: 'Tank, DPS'
    },
    {
        name: 'Mystic',
        desc: 'Mystic Description',
        img: require('../../../assets/images/classesAvatars/mystic.jpeg'),
        roles: 'DPS, Heal, Buff'
    }
]

class ChooseSingleHero extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            heroName: ''
        }
    }

    goBackToHeroSelection = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <SafeAreaView style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: '#fff' }}>
                <ScrollView>
                    <View style={{ marginHorizontal: 10 }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row' }}
                            onPress={this.goBackToHeroSelection}
                        >
                            <View style={{ borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10, margin: 10 }}>
                                <Text style={{ fontSize: 20 }}>Go Back To Hero Selection</Text>
                            </View>
                        </TouchableOpacity>

                        <View>
                            <Text style={{ fontSize: 22, alignSelf: 'center', marginVertical: 10 }}>{this.props.location.state} selection</Text>
                        </View>

                        <TextInput
                            style={{ borderBottomWidth: 1, borderBottomColor: '#ddd', marginBottom: 20 }}
                            placeholder="Hero Name"
                            onChangeText={(val) => this.setState({ heroName: val })}
                        />

                        <View>
                            <Text style={{ marginTop: 10, marginBottom: 20, fontSize: 18 }}>Choose Hero Class:</Text>
                            {
                                classesInfo.map((cls, i) => {
                                    return (
                                        <TouchableOpacity key={i} style={{ marginVertical: 10 }}>
                                            <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#ddd', paddingBottom: 10 }}>
                                                <View style={{ maxWidth: 120 }}>
                                                    <Image style={{ width: 120, height: 120 }} source={cls.img} />
                                                    <View style={{ marginTop: 10, marginLeft: 5 }}>
                                                        <Text style={{ fontWeight: 'bold' }}>Roles: {cls.roles}</Text>
                                                    </View>
                                                </View>

                                                <View style={{ flex: 1, marginHorizontal: 10 }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{cls.name}</Text>
                                                    <Text style={{ fontSize: 16 }}>{cls.desc}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

})

export default withRouter(ChooseSingleHero)