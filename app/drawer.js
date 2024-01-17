import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';

import Home from './home';
import About from './legend/About';
import Tglo from './legend/Tglo';

const Drawer = createDrawerNavigator();

const CustomHeader = ({ title, navigation }) => {
  return (
    <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ marginLeft: 10 }}
      >
        <FontAwesome name="bars" size={20} color="black" />
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: 'black' }}>{title}</Text>
      </View>
      <View style={{ width: 30 }} />
    </View>
  );
};


export default function App() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: ({ navigation, route }) => (
          <CustomHeader title={route.name} navigation={navigation} />
        ),
        contentContainerStyle: { paddingTop: 0 }, // Adjust the paddingTop to your preference
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About..." component={About} />
      <Drawer.Screen
        name="Texas General Land Office"
        component={Tglo}
      />
    </Drawer.Navigator>
  );
}
