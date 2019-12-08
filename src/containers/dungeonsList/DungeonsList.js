import React from 'react'
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { withRouter } from "react-router";


const dungeons = [
    {
        name: 'Bandit Lair',
        difficulty: 'Easy',
        creaturesFromFolder: 'Bandits',
        img: require('../../../assets/images/dungeons/bandit-lair.jpg'),
        desc: 'Bandit Lair description'
    },
    {
        name: 'Goblin Hideout',
        difficulty: 'Easy',
        creaturesFromFolder: 'Goblins',
        img: require('../../../assets/images/dungeons/goblin-hideout.jpg'),
        desc: 'Goblin Hideout description'
    },
    {
        name: 'Tombs of the Skeleton Hand',
        difficulty: 'Medium',
        creaturesFromFolder: 'Skeletons',
        img: require('../../../assets/images/dungeons/tombs-of-the-skeleton-hand.jpg'),
        desc: 'Tombs of the Skeleton Hand description'
    },
    {
        name: 'Haunt of the Watchful Eye',
        difficulty: 'Medium',
        creaturesFromFolder: 'Gazers',
        img: require('../../../assets/images/dungeons/haunt-of-the-watchful-eye.jpg'),
        desc: 'Haunt of the Watchful Eye description'
    },
    {
        name: 'Fallen Kings Vault',
        difficulty: 'Hard',
        creaturesFromFolder: 'Fallen Kings',
        img: require('../../../assets/images/dungeons/fallen-kings-vault.png'),
        desc: 'Fallen Kings Vault description'
    },
    {
        name: 'Mount Titanus',
        difficulty: 'Hard',
        creaturesFromFolder: 'Titans',
        img: require('../../../assets/images/dungeons/mount-titanus.jpg'),
        desc: 'Mount Titanus description'
    },

]

class DungeonsList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    enterDungeon = (dungeon) => {

    }

    render() {
        return (
            <SafeAreaView style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#fff' }}>
                <Text style={{ fontSize: 20, alignSelf: 'center' }}>List of dungeons</Text>
                <FlatList
                    data={dungeons}
                    style={{}}
                    renderItem={({ item }) => {
                        return (
                            <View elevation={1} style={{ borderWidth: 1, borderColor: '#ddd', marginHorizontal: 10, height: Dimensions.get('window').height - 40 }}>
                                <Image
                                    source={item.img}
                                    style={{ width: 300, height: 200 }}
                                />
                                <Text style={{ fontSize: 20, alignSelf: 'center', marginBottom: 5 }}>{item.name}</Text>
                                <Text style={{ fontSize: 16, marginBottom: 15, marginHorizontal: 5, alignSelf: 'center' }}>Difficulty: {item.difficulty}</Text>

                                <TouchableOpacity
                                    onPress={() => { this.enterDungeon(item) }}
                                    style={{ flexDirection: 'row', alignSelf: 'center' }}
                                >
                                    <View
                                        style={{
                                            paddingVertical: 5,
                                            paddingHorizontal: 10,
                                            backgroundColor: 'mediumseagreen',
                                            borderTopLeftRadius: 10,
                                            borderBottomLeftRadius: 10,
                                            borderTopRightRadius: 10,
                                            borderBottomRightRadius: 10
                                        }}
                                    >
                                        <Text style={{ fontSize: 20, color: '#fff' }}>Enter dungeon</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.name.toString()}
                    horizontal={true}
                    alwaysBounceHorizontal={false}
                    alwaysBounceVertical={false}
                    bounces={false}
                />
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({

})

export default withRouter(DungeonsList)