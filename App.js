import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constants/style';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpense';
import AllExpenses from './screens/AllExpenses';
import IconButton from './components/UI/IconButton';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator screenOptions={({ navigation }) => ({ 
      headerStyle: { backgroundColor: GlobalStyles.color.bgColor1 },
      headerTintColor: GlobalStyles.color.primaryAction,
      tabBarStyle: { backgroundColor: GlobalStyles.color.bgColor1 },
      tabBarActiveTintColor: GlobalStyles.color.primaryAction,
      headerRight: () => ( <IconButton icon='add' size={24} color={GlobalStyles.color.primaryAction} onPress={() => {
        navigation.navigate('ManageExpense');
      }} 
      />
    ),
    })}
    >

      <BottomTabs.Screen name='RecentExpenses'
      component={RecentExpenses}
      options={{
        tabBarIcon: ({ color, size }) => (
            <Entypo name="back-in-time" color={color} size={size} />
        ),
        title: 'Recent Expenses',
        tabBarLabel: 'Recent'
      }}
      />

      <BottomTabs.Screen name='AllExpenses'
      component={AllExpenses}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name="border-all" size={24} color={color} />
        ),
        title: 'All Expenses',
        tabBarLabel: 'All'
      }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.color.bgColor1 },
        }}>
          <Stack.Screen name='ExpensesOverview' component={ExpensesOverview} options={{ headerShown: false }}/>
          <Stack.Screen name='ManageExpense' component={ManageExpense} options={{
            presentation: 'modal',
            headerTintColor: GlobalStyles.color.primaryAction,
          }}/>
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}