import { StyleSheet, Text } from 'react-native';

export const AppTitle = () => {
  return <Text style={styles.mapHeading}>Encontre pontos de coleta</Text>;
};
const styles = StyleSheet.create({
  mapHeading: {
    width: '95%',
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
    paddingTop: 100,
    alignSelf: 'center',
  },
});
