interface ISubmitAction {
    type: string;
    payload?: any;
}

export const CHANGE_PROJECT_INFO_DATA = 'CHANGE_PROJECT_INFO_DATA';
export const CHANGE_REWARDS_DATA = 'CHANGE_REWARDS_DATA';

const defaultState = {
    name: '',
    author: '',
    description: '',
    story: '',
    video: '',
    estimated: 0,
    rewards: [{ name: '', price: 0, description: '', limited: false, limit: 0 }]
};

export const submitReducer = (state = defaultState, action: ISubmitAction) => {
    switch (action.type) {
        case CHANGE_PROJECT_INFO_DATA:
            return { ...action.payload, rewards: state.rewards };
        case CHANGE_REWARDS_DATA:
            return { ...state, rewards: action.payload };
        default:
            return state;
    }
};
