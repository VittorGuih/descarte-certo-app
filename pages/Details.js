import { Image, ScrollView, useWindowDimensions } from 'react-native';
// import { Text } from 'react-native-paper';
import RenderHtml from 'react-native-render-html';

export const Details = ({ route, navigation }) => {
  const { width } = useWindowDimensions();
  const { itemId, itemContent } = route.params;
  const source = {
    html: `
    <section>
    <h1>O que é coleta seletiva e qual a sua importância?</h1>
    <img src="https://images.ecycle.com.br/wp-content/uploads/2021/05/16222852/coleta-seletiva.jpg.webp" alt="teste img">
    
    <h2>Saiba como e por que é importante contribuir com a coleta seletiva</h2>
    <p>A coleta seletiva é método que otimiza os processos de destinação do lixo. E por falar em lixo… Vale a pena ressaltar que “lixo” é uma palavra geral para designar as palavras “resíduo” (os descartes que ainda têm alguma utilização possível por meio da reciclagem ou reutilização) e “rejeito” (aqueles que já não podem ser utilizados novamente).</p>
    <p>A coleta seletiva é método que otimiza os processos de destinação do lixo. E por falar em lixo… Vale a pena ressaltar que “lixo” é uma palavra geral para designar as palavras “resíduo” (os descartes que ainda têm alguma utilização possível por meio da reciclagem ou reutilização) e “rejeito” (aqueles que já não podem ser utilizados novamente).</p>
    <p>A coleta seletiva é método que otimiza os processos de destinação do lixo. E por falar em lixo… Vale a pena ressaltar que “lixo” é uma palavra geral para designar as palavras “resíduo” (os descartes que ainda têm alguma utilização possível por meio da reciclagem ou reutilização) e “rejeito” (aqueles que já não podem ser utilizados novamente).
    A coleta seletiva é método que otimiza os processos de destinação do lixo. E por falar em lixo… Vale a pena ressaltar que “lixo” é uma palavra geral para designar as palavras “resíduo” (os descartes que ainda têm alguma utilização possível por meio da reciclagem ou reutilização) e “rejeito” (aqueles que já não podem ser utilizados novamente).
    A coleta seletiva é método que otimiza os processos de destinação do lixo. E por falar em lixo… Vale a pena ressaltar que “lixo” é uma palavra geral para designar as palavras “resíduo” (os descartes que ainda têm alguma utilização possível por meio da reciclagem ou reutilização) e “rejeito” (aqueles que já não podem ser utilizados novamente).</p>
    <a href="https://www.ecycle.com.br/coleta-seletiva-em-condominios-como-implantar-projeto-programa/">Coleta seletiva</a>
    </section>`,
  };
  const detailStyles = {
    h2: {
      marginBottom: 0,
    },
    a: {
      color: 'black',
      fontWeight: 'bold',
    },
    p: {
      fontSize: 17,
      textAlign: 'justify',
      marginBottom: 0,
      paddingBottom: 0,
    },
    section: {
      padding: 10,
    },
    img: {
      borderRadius: 8,
      width: width - 16,
      overflow: 'hidden',
    },
  };
  return (
    <ScrollView>
      {/* <Text>{itemId.itemId}</Text>
      <Text style={{}}>{itemContent.content}</Text> */}
      <RenderHtml
        contentWidth={width}
        source={source}
        tagsStyles={detailStyles}
      />
      <Image style={{}} />
    </ScrollView>
  );
};
