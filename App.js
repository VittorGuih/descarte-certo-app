import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Home } from './pages';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.droidSafeArea}>
        <StatusBar style='dark' />
        <Home />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
});
