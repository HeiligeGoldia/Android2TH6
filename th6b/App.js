import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://6346d54bdb768439769f9843.mockapi.io/api/User")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);
  return (
    <View style={{margin: 20, marginTop: 50}}>
      <ScrollView>
        {posts.map((user) => (
          <Text key={user.id}>{user.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
