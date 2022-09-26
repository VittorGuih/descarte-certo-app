import * as React from 'react';
import { ImageBackground } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

const CardArticle = ({
  itemId,
  name,
  description,
  content,
  lastCard,
  navigation,
}) => (
  <Card
    onPress={() => {
      navigation.navigate('Details', {
        itemId: { itemId },
        itemContent: { content },
      });
    }}
    elevation={2}
    style={{
      marginLeft: 8,
      marginRight: 8,
      backgroundColor: 'rgb(244, 232, 251)',
      marginBottom: lastCard ? 16 : 8,
      marginTop: 8,
    }}
  >
    <ImageBackground
      source={{ uri: 'https://picsum.photos/700' }}
      style={{
        height: 150,
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden',
      }}
    >
      <Title
        style={{
          color: 'white',
          paddingLeft: 8,
          fontWeight: 'bold',
          fontSize: 32,
          letterSpacing: 1,
          backgroundColor: '#00000039',
          height: '100%',
          display: 'flex',
          textAlignVertical: 'center',
        }}
      >
        {name}
      </Title>
    </ImageBackground>
    <Card.Content>
      <Paragraph style={{ padding: 8 }}>{description}</Paragraph>
    </Card.Content>
  </Card>
);

export default CardArticle;
