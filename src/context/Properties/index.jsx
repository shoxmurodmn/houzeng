import { createContext, useReducer } from 'react'
import { reducer } from './reducer'

const PropertiesContext = createContext()

const PropertiesProvider = ({ children }) => {
   
   const [state, dipatch] = useReducer(reducer, [])

   return <PropertiesContext.Provider value={[state, dipatch]}>
      {children}
   </PropertiesContext.Provider>
}

export default PropertiesProvider
