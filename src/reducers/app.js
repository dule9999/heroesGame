import { createAction } from 'redux-actions';

export const initialAppState = {
    hero1name: 'Pera',
    hero1weapon: { name: 'Basic Sword', id: 'basic-sword', dmg: 5, stats: null },
    hero1armor: { name: 'Basic Armor', id: 'basic-armor', def: 5, stats: null },
    hero1stats: { str: 10, dex: 6, int: 4 },
    hero2name: 'Mileva',
    hero2weapon: { name: 'Basic Wand', id: 'basic-wand', dmg: 2, stats: null },
    hero2armor: { name: 'Basic Armor', id: 'basic-armor', def: 5, stats: null },
    hero2stats: { str: 3, dex: 7, int: 10 },
    hero3name: 'Zika',
    hero3weapon: { name: 'Basic Staff', id: 'basic-staff', dmg: 3, stats: null },
    hero3armor: { name: 'Basic Armor', id: 'basic-armor', def: 5, stats: null },
    hero3stats: { str: 7, dex: 6, int: 7 },
    hero4name: 'Dragojla',
    hero4weapon: { name: 'Basic Double Knives', id: 'basic-double-knives', dmg: 5, stats: null },
    hero4armor: { name: 'Basic Armor', id: 'basic-armor', def: 5, stats: null },
    hero4stats: { str: 6, dex: 10, int: 4 }
};

export const appReducer = (state = initialAppState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
