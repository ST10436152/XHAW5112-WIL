//App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import CourseNavigator from './navigation/CourseNavigator';
import CalculateFeesScreen from './screens/CalculateFeesScreen';
import ContactScreen from './screens/ContactScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import { ImageBackground, StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs: React.FC = () => (
  <ImageBackground source={require('./assets/background_home.jpg')} style={styles.background} resizeMode="cover">
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Courses':
              iconName = 'book-outline';
              break;
            case 'Calculate Fees':
              iconName = 'calculator-outline';
              break;
            case 'Contact':
              iconName = 'call-outline';
              break;
            default:
              iconName = 'home-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} style={styles.icon} />;
        },
        tabBarStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 20,
          elevation: 0,
          shadowOpacity: 0.3,
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#B0B0B0',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CourseNavigator} />
      <Tab.Screen name="Calculate Fees" component={CalculateFeesScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  </ImageBackground>
);

const App: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  icon: {
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
});

export default App;

