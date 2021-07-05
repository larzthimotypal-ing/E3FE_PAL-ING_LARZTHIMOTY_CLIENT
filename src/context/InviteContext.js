import { createContext, useEffect, useReducer } from 'react'
import { inviteReducer } from '../reducers/inviteReducer';

export const InviteContext = createContext();

const InviteContextProvider = (props) => {

    const [invites, dispatch] = useReducer(inviteReducer, [], () => {

        const localData = localStorage.getItem('invites');

        return localData ? JSON.parse(localData) : [];
        
    });

    useEffect(() => {
        localStorage.setItem('invites', JSON.stringify(invites));
    }, [invites]);

    return (
        <InviteContext.Provider value={{invites, dispatch}}>
            {props.children}
        </InviteContext.Provider>
    )
}

export default InviteContextProvider;