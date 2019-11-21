import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import RecentHistory from "./RecentHistory";
import MyProfile from "./MyProfile";
import RestaurantList from '../components/RestaurantList';
export default function Dashboard() {
   const [activeItem, setActiveItem] = useState('');
   const handleItemClick = (e, { name }) => {
      setActiveItem(name);
   }

   return (
      <>
         <Menu tabular>
         <RestaurantList/>
            <Menu.Item
               name='RecentHistory'
               active={activeItem === 'RecentHistory'}
               onClick={handleItemClick}
            >
            <NavLink to="/RecentHistory">History</NavLink>
        </Menu.Item>
            <Menu.Item
               name='MyProfile'
               active={activeItem === 'MyProfile'}
               onClick={handleItemClick}
            >
            <NavLink to="/MyProfile">MyProfile</NavLink>
        </Menu.Item>
            </Menu>
            <Route path="/RecentHistory" component={RecentHistory} />
            <Route path="/MyProfile" component={MyProfile} />
        </>
   )
};