import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import pointsz from './points';

export default function App() {
  const [points, setPoints] = useState(pointsz);
  const [region, setRegion] = useState();
  const initialRegion = {
    latitude: -10.245383142030736,
    longitude: -48.326722038450974,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const getCurrentPosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Ops!', 'Permissão de acesso a localização negada.');
    }

    let {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();

    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0322,
      longitudeDelta: 0.0021,
    });
  };
  useEffect(() => {
    getCurrentPosition();
  }, []);
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <Text style={styles.mapHeading}>Encontre pontos de coleta</Text>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            showsUserLocation={true}
            region={region}
            initialRegion={initialRegion}
          >
            {points.map((point, index) => {
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                  title={'ASCAMPA'}
                  description={'description'}
                />
              );
            })}
          </MapView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapHeading: {
    width: '95%',
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
    paddingTop: 100,
    // backgroundColor: 'orange',
    alignSelf: 'center',
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  mapContainer: {
    flex: 8,
    width: '95%',
    marginHorizontal: 8,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
});
