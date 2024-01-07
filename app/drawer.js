// MyDrawer.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './home';
import About from './legend/About';
import Tglo from './legend/Tglo';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerStyle: { height: 50 } }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About..." component={About} />
      <Drawer.Screen name="Texas General Land Office" component={Tglo} />
    </Drawer.Navigator>
  );
};

export default function App() {
    return <MyDrawer />;
  }