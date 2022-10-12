import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';

export default function App() {

  const [toDo, setToDo] = React.useState([])
  const [work, setWork] = React.useState("");

  const render = ({ item }) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>{item.id}</Text>
        <Text>{item.work}</Text>
        <TouchableOpacity style={{}} onPress={() => {
          setToDo(toDo.slice(item.id));
        }}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View>
      <View style={{flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 1, alignItems: 'center'}}>
        <View style={{borderColor: 'black', marginTop: 50, marginBottom: 30, marginLeft: 30, borderWidth: 2, flex: 4, height: 40}}>
          <TextInput placeholder='To do' style={{padding: 4, paddingLeft: 10}} onChangeText={(e) => setWork(e)}></TextInput>
        </View>
        <TouchableOpacity style={{flex: 1, marginTop: 50, marginBottom: 30, marginLeft: 25, marginRight: 30, 
            backgroundColor: '#43e06e', alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={()=>{
          if(toDo.length == 0){
            setToDo(toDo => [...toDo, {id: 1, work: work}])
          }
          else{
            setToDo(toDo => [...toDo, {id: toDo[toDo.length-1].id+1, work: work}])
          }
        }}>
          <Text style={{color: 'white'}}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={toDo} renderItem={render} keyExtractor={item => item.id}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
