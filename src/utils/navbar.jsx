import useId from "../hooks/useId";
import HomePage from '../pages/home'
import PropertiesPage from '../pages/Properties'
export const navbar = [
   {
      id: useId,
      elemebt: <HomePage/> ,
      title: 'Home',
      path: '/home',
      private: false,
      hidden: false,
   },

   {
      id: useId,
      element: <PropertiesPage/>,
      title: 'Properties',
      path: '/properties',
      private: false,
      hidden: false,
   }
]