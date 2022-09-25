import { View } from 'react-native';
import { Text } from 'react-native-paper';

export const Details = ({ route, navigation }) => {
  const { itemId, itemContent } = route.params;

  return (
    <View>
      <Text>{itemId.itemId}</Text>
      <Text>{itemContent.content}</Text>
    </View>
  );
};
