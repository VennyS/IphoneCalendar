import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ToDoList';
import Form from './components/Form';

export default function App() {
    const [listOfItems, setListOfItems] = useState([
      {text: 'Купить молоко', key: '1'},
      {text: 'Купить яйца', key: '2'},
      {text: 'Купить масло', key: '3'},
      {text: 'Купить картошку', key: '4'},
    ])

    const generateNextKey = () => {
      // Получаем максимальное значение ключа в текущем списке
      const maxKey = Math.max(...listOfItems.map(item => parseInt(item.key)));
      // Генерируем следующий ключ, увеличивая максимальное значение на 1
      return (maxKey + 1).toString();
    };

    const addHanlder = (text) => {
      setListOfItems((list) => {
        return [
          { text: text, key: generateNextKey() },
          ...list
        ]
      })
    }

    const deleteHandler = (key) => {
      setListOfItems((list) => {
        return list.filter(listOfItems => listOfItems.key != key)
      });
    }

    return (
      <View>
        <Header />
        <Form addHanlder={addHanlder}/>
        <View>
          <FlatList data={listOfItems} renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler} />
          )} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
});
