import { v4 as uuid } from 'uuid';

export const inviteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_INVITE':
            return [...state, { from: action.from, sent: action.sent, status: 'received', id: uuid() }]

        case 'ACCEPT_INVITE':
            return state.map(i => {
                if (i.id === action.id) {
                    return { ...i, status: 'accepted' };
                }
                return i;
            })
        default:
            return state;
    }
}