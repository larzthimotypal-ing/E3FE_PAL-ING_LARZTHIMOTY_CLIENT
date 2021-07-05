import { createContext, useState } from 'react';

export const MemberContext = createContext();

const MemberContextProvider = (props) => {

    const [data, setData] = useState([
        { heading: 'Larz Pal-ing', paragraph: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column.', buttonText: 'View details >>' },
        { heading: 'Raquel Sorila', paragraph: 'Some representative placeholder content for the three columns of text below the carousel. This is the second column.', buttonText: 'View details >>' },
        { heading: 'Kyla Mae Samson', paragraph: 'Some representative placeholder content for the three columns of text below the carousel. This is the third column.', buttonText: 'View details >>' },
        { heading: 'Michelle Espeleta', paragraph: 'Some representative placeholder content for the three columns of text below the carousel. This is the fourth column.', buttonText: 'View details >>' },
        { heading: 'Vince Repia', paragraph: 'Some representative placeholder content for the three columns of text below the carousel. This is the fifth column.', buttonText: 'View details >>' },
    
    ])

    const [count, setCount] = useState(data.length);



    return (
        <MemberContext.Provider value={{ data, count }}>
        {props.children}
        </MemberContext.Provider>
    )

}

export default MemberContextProvider;