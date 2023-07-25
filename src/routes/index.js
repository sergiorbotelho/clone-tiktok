import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import New from '../pages/new';
import Inbox from '../pages/inbox';
import Profile from '../pages/profile';
import Search from '../pages/search';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ButtonNew from '../components/ButtonNew';
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#FFF',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            if (focused) {
              return <Ionicon name="home" size={size} color={color} />;
            }

            return <Ionicon name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            if (focused) {
              return <Ionicon name="search" size={size} color={color} />;
            }

            return <Ionicon name="search-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({size}) => {
            return <ButtonNew size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            if (focused) {
              return (
                <Ionicon name="chatbubble-ellipses" size={size} color={color} />
              );
            }

            return (
              <Ionicon
                name="chatbubble-ellipses-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            if (focused) {
              return <Ionicon name="person" size={size} color={color} />;
            }

            return <Ionicon name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
