import * as React from 'react';
import { ScrollView } from 'react-native';
import DATA from '../articles';
import CardArticle from '../components/Card';

export const Articles = ({ navigation }) => {
  const [data, setData] = React.useState(DATA);
  let lastCard = false;
  return (
    <ScrollView>
      {data.map((item, idx) => {
        {
          /* Adds margin to the last card [solve shadow issue] */
        }
        if (data.length - 1 === idx) {
          lastCard = true;
        }
        const { name, description, content } = item;
        return (
          <CardArticle
            key={idx}
            name={name}
            description={description}
            content={content}
            navigation={navigation}
            itemId={idx}
            lastCard={lastCard}
          />
        );
      })}
    </ScrollView>
  );
};
