import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// -------------------------------------Tabscreens-----------------------------------------------------
function LearnScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Learn screen</Text>
      <Button
        title="Go to Rate Us"
        onPress={() => navigation.navigate('Rate Us')}
      />
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Rate Us"
        onPress={() => navigation.navigate('Rate Us')}
      />
    </View>
  );
}

// -------------------------------------Drawerscreens-----------------------------------------------------

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Rate Us"
        onPress={() => navigation.navigate('Rate Us')}
      />
    </View>
  );
}

function RateUsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Rate Us screen</Text>
      <Button
        title="Go to Rate Us"
        onPress={() => navigation.navigate('Rate Us')}
      />
    </View>
  );
}

function FollowUsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Follow Us screen</Text>
      <Button
        title="Go to Rate Us"
        onPress={() => navigation.navigate('Rate Us')}
      />
    </View>
  );
}


// -------------------------------------stacks-----------------------------------------------------


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const LearnStack = createStackNavigator();

function LearnStackScreen() {
  return (
    <LearnStack.Navigator>
      <LearnStack.Screen name="Learn" component={LearnScreen} />
    </LearnStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const RateUsStack = createStackNavigator();

function RateUsStackScreen() {
  return (
    <RateUsStack.Navigator>
      <RateUsStack.Screen name="Rate Us" component={RateUsScreen} />
    </RateUsStack.Navigator>
  );
}


const FollowUsStack = createStackNavigator();

function FollowUsStackScreen() {
  return (
    <FollowUsStack.Navigator>
      <FollowUsStack.Screen name="Follow Us" component={FollowUsScreen} />
    </FollowUsStack.Navigator>
  );
}

// -------------------------------------tabs-----------------------------------------------------

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e6e',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Learn"
        component={LearnStackScreen}
        options={{
          tabBarLabel: 'Learn',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



// -------------------------------------drawers-----------------------------------------------------


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Settings" component={SettingsStackScreen} />
        <Drawer.Screen name="Rate Us" component={RateUsStackScreen} />
        <Drawer.Screen name="Follow Us" component={FollowUsStackScreen} />
        <Drawer.Screen name="Home" component={Tabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}