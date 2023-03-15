import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Aluguel',
        value: '3.000,00',
        date: '10/09/2022',
        type: 0 //despesas
    },
    {
        id: 2,
        label: 'Pix Cliente Tal',
        value: '2.500,00',
        date: '16/09/2022',
        type: 1 //receitas
    },
    {
        id: 3,
        label: 'Salário',
        value: '6.000,00',
        date: '23/09/2022',
        type: 1 //dreceitas
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name= "Henrique Faioli" />

      <Balance saldo="5.500,00" gastos="3.000,00" />

      <Actions/>
      
      <Text style={styles.title}>Últimas movimentações </Text> 

      <FlatList 
        style={styles.list}    
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});