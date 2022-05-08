import {createContext} from 'react'
import useDataFetching from '../hooks/useDataFetching';

export const ItemsContext = createContext();

export const ItemsContextProvider = ({children}) => {
    const [loading, error, data] = useDataFetching(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-SecondEdition/items`);

    <ItemsContext.Provider value={{ items: data, loading, error }}>
        {children}
    </ItemsContext.Provider>
}