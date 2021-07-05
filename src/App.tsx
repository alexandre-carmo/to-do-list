/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import { Button } from './components/Button';
import Background from './components/Background';

import { ListToDo, TextListToDo, InputToDo } from './global/styles';

export function App() {
  const [newToDo, setNewToDo] = useState('');
  const [myToDo, setMyToDo] = useState([]);

  function handleNewToDo() {
    setMyToDo(oldTodo => [...oldTodo, newToDo]);
  }
  
  return (
    <Background>
      <View>
        <InputToDo
          onChangeText={setNewToDo}
        />
        <Button 
          title="Nova Tarefa"
          onPress={handleNewToDo} 
          activeOpacity={0.7}
        />
      </View>
      <ListToDo>
        {
          myToDo.map(assignment => (
            <TextListToDo
              key={Math.random()}
            >
              {assignment}
            </TextListToDo>
          ))
        }
      </ListToDo>
    </Background>
  );
}
