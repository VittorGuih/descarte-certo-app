import React, { useState } from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import IconFeather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { MapView } from '../components';
// import { Articles } from './Articles';
import { ArticleView } from './ArticleView';

const RecentsRoute = () => (
  <Text
    style={{
      display: 'flex',
      flex: 1,
      textAlignVertical: 'center',
      textAlign: 'center',
    }}
  >
    Noticias
  </Text>
);

const NotificationsRoute = () => (
  <Text
    style={{
      display: 'flex',
      flex: 1,
      textAlignVertical: 'center',
      textAlign: 'center',
    }}
  >
    Sobre o App
  </Text>
);

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'mapa',
      title: 'Lugares',
      focusedIcon: () => (
        <View style={{ paddingTop: 2 }}>
          <Icon size={18} name='map' />
        </View>
      ),
      unfocusedIcon: () => (
        <View style={{ paddingTop: 2 }}>
          <Icon size={18} name='map-o' />
        </View>
      ),
    },
    {
      key: 'articleView',
      title: 'Artigos',
      focusedIcon: () => (
        <View style={{ paddingTop: 2 }}>
          <IconAwesome5 size={15} name='book-open' />
        </View>
      ),
      unfocusedIcon: () => (
        <View style={{ paddingTop: 2 }}>
          <IconFeather size={18} name='book-open' />
        </View>
      ),
    },
    {
      key: 'newspaper',
      title: 'Noticias',
      focusedIcon: () => (
        <View style={{ paddingTop: 2 }}>
          <IconIonicons size={18} name='newspaper' />
        </View>
      ),
      unfocusedIcon: () => (
        <View style={{ paddingTop: 2 }}>
          <IconIonicons size={18} name='newspaper-outline' />
        </View>
      ),
    },
    {
      key: 'about',
      title: 'Sobre o App',
      focusedIcon: () => (
        <View style={{ paddingTop: 0 }}>
          <IconFoundation size={22} name='info' />
        </View>
      ),
      unfocusedIcon: () => (
        <View style={{ paddingTop: 2 }}>
          <IconFeather size={18} name='info' />
        </View>
      ),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    mapa: MapView,
    articleView: ArticleView,
    newspaper: RecentsRoute,
    about: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
export default Home;
