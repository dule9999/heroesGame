import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native'
import { withRouter } from "react-router";

const classesInfo = [
    {
        name: 'Zealot',
        desc: 'A holy warrior dressed in plate armor, sent by the gods to strike fear into the hearts of infidels. His faith gives him power to endure attacks and provide magical resistance to his companions.',
        img: require('../../../assets/images/classesAvatars/zealot.jpeg'),
        roles: 'Tank, Buffer',
        bcgColor: 'goldenrod'
    },
    {
        name: 'Trickster',
        desc: 'Illusions, smoke and deceit are trickster\'s tools. Useful to have in any group of adventurers, so that any attacker that tries his luck with them will be redirected, distracted or even poisoned.',
        img: require('../../../assets/images/classesAvatars/trickster.jpg'),
        roles: 'Debuffer, DPS',
        bcgColor: 'dimgrey'
    },
    {
        name: 'Witch Doctor',
        desc: 'A medicine man of the far tribes, who received passed down knowledge about herbal remedies and rituals of the old.',
        img: require('../../../assets/images/classesAvatars/witch-doctor.jpg'),
        roles: 'Heal, Buff, Debuff',
        bcgColor: 'darkred'
    },
    {
        name: 'Spellbinder',
        desc: 'Binding the elements of nature, fire, ice and storm, this class can seriously harm the group\'s opponents, sometimes even disintegrating them.',
        img: require('../../../assets/images/classesAvatars/spellbinder.jpg'),
        roles: 'DPS',
        bcgColor: 'orangered'
    },
    {
        name: 'Druid',
        desc: 'The communer with forest and mountain spirits, half human, half animal - the druid, is a versatile ally, that can take any role and be proficient in it.',
        img: require('../../../assets/images/classesAvatars/druid.jpg'),
        roles: 'Tank, DPS, Heal',
        bcgColor: 'darkolivegreen'
    },
    {
        name: 'Knight',
        desc: 'Knight Description',
        img: require('../../../assets/images/classesAvatars/knight.jpg'),
        roles: 'Tank, DPS',
        bcgColor: 'darkslateblue'
    },
    {
        name: 'Mystic',
        desc: 'Mystic Description',
        img: require('../../../assets/images/classesAvatars/mystic.jpeg'),
        roles: 'DPS, Heal, Buff',
        bcgColor: 'purple'
    }
]

class HeroClassSelection extends React.PureComponent {
    openChooseHeroNameScreen = (cls) => {
        if (this.props.location.pathname !== '/heroNameSelection') {
            this.props.history.push({ pathname: '/heroNameSelection', state: { cls: cls, hero: this.props.location.state } })
        }
    }

    render() {
        return (
            <SafeAreaView style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: '#fff' }}>
                <ScrollView>
                    <View style={{ marginHorizontal: 10 }}>
                        <View>
                            <Text style={{ fontSize: 22, alignSelf: 'center', marginVertical: 10 }}>{this.props.location.state.name} selection</Text>
                        </View>

                        <View>
                            <Text style={{ marginTop: 10, marginBottom: 20, alignSelf: 'center', fontSize: 18 }}>Choose Hero Class:</Text>

                            {
                                classesInfo.map((cls, i) => {
                                    return (
                                        <View
                                            key={i}
                                            style={{ alignSelf: 'center', marginVertical: 20, marginHorizontal: 20, backgroundColor: cls.bcgColor, height: 550, width: 500 }}
                                        >
                                            <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginVertical: 5, fontSize: 20, color: '#fff' }}>{cls.name.toUpperCase()}</Text>
                                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                                <Image style={{ flex: 1, height: 300 }} source={cls.img} />
                                            </View>

                                            <View style={{ margin: 10 }}>
                                                <Text style={{ fontSize: 16, color: '#fff', marginBottom: 10 }}>{cls.desc}</Text>
                                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>Roles: {cls.roles}</Text>
                                            </View>
                                            <TouchableOpacity
                                                onPress={() => { this.openChooseHeroNameScreen(cls.name) }}
                                                style={{ flexDirection: 'row', alignSelf: 'center', borderWidth: 1, marginVertical: 10, borderColor: '#fff', borderRadius: 10 }}
                                            >
                                                <View style={{ paddingVertical: 10, paddingHorizontal: 10, }}>
                                                    <Text style={{ fontSize: 20, color: '#fff' }}>Choose this class</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
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

export default withRouter(HeroClassSelection)