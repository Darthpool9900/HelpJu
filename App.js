import { StatusBar } from 'expo-status-bar';
import { NavigationContainer,DefaultTheme, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '##edf2ef',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

