import { createContext, useReducer} from 'react'

import PropertiesProvider from './Properties'




const RootContext = ({children}) => {
   return <>
      <PropertiesProvider>
         {children}
      </PropertiesProvider>
   </>
}

export default RootContext
