import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Articles } from './Articles';
import { Details } from './Details';

const Stack = createNativeStackNavigator();

export const ArticleView = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Articles'>
        <Stack.Screen
          name='Articles'
          component={Articles}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
