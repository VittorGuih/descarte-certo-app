import * as React from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';

const CardArticle = () => (
  <Card>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>Card titl aaae</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
  </Card>
);

export default CardArticle;
