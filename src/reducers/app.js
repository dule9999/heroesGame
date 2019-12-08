import { createAction } from 'redux-actions';

export const SAVE_HERO_CLASS = 'APP_SAVE_HERO_CLASS'
export const SAVE_HERO_NAME = 'APP_SAVE_HERO_NAME'
export const SAVE_HERO_PROP = 'APP_SAVE_HERO_PROP'

export const initialAppState = {
    hero1name: 'First Hero',
    hero1id: 1,
    hero1cls: '',
    hero1weapon: { name: 'Basic Sword', id: 'basic-sword', dmg: 5, stats: null },
    hero1armor: { name: 'Basic Armor', id: 'basic-armor', def: 5, stats: null },
    hero1stats: { str: 10, dex: 6, int: 4 },
    hero2name: 'Second Hero',
    hero2id: 2,
    hero2cls: '',
    hero2weapon: { name: 'Basic Wand', id: 'basic-wand', dmg: 2, stats: null },
    hero2armor: { name: 'Basic Armor', id: 'basic-armor', def: 5, stats: null },
    hero2stats: { str: 3, dex: 7, int: 10 },
    hero3name: 'Third Hero',
    hero3id: 3,
    hero3cls: '',
    hero3weapon: { name: 'Basic Staff', id: 'basic-staff', dmg: 3, stats: null },
    hero3armor: { name: 'Basic Armor', id: 'basic-armor', def: 5, stats: null },
    hero3stats: { str: 7, dex: 6, int: 7 },
    hero4name: 'Fourth Hero',
    hero4id: 4,
    hero4cls: '',
    hero4weapon: { name: 'Basic Double Knives', id: 'basic-double-knives', dmg: 5, stats: null },
    hero4armor: { name: 'Basic Armor', id: 'basic-armor', def: 5, stats: null },
    hero4stats: { str: 6, dex: 10, int: 4 }
};

export const appReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case SAVE_HERO_PROP:
            return {
                ...state,
                [Object.keys(action.payload)[0]]: Object.values(action.payload)[0]
            }
        default:
            return state;
    }
};

export const saveHeroClass = createAction(SAVE_HERO_CLASS);
export const saveHeroName = createAction(SAVE_HERO_NAME);
export const saveHeroProp = createAction(SAVE_HERO_PROP);
