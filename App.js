import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from 'axios';
import { Text, StyleSheet, View, TextInput, ScrollView, Image, TouchableHighlight } from 'react-native';
import TitleHeading from './components/TitleHeading';
//import SearchBar from './components/SearchBar';

/*
TODO:
- Investigate logless crashing on Android
- Catch 'null values from API return and display a TOAST message
- Add favorites scene
- 'Add to favorites' through TouchableHighlight and function addFavorites
*/

export default function App() {

    const apikey = "http://www.omdbapi.com/?i=tt3896198&apikey=ec5209be"

    const [state, setState] = useState({
        s: "Enter A Movie Title",
        movieList: [],
        selected: {}
    });

    // Use Axios to make a call to the apikey with new queery for searching through the database using the search term set in state.s
    const search = () => {
        axios(apikey + "&s=" + state.s).then(({ data }) => {
          // Create a variable called movieList to handle the returned data from the queery
          // Capital 'S' on Search due to what the API returns (thank you blessed POSTMAN)
            let movieList = data.Search
            // Set the state back to prev state and set movieList TO the movie
            setState(prevState => {
              return{...prevState, movieList: movieList }
            })
        }) 
    }

  return (
    <View style={styles.container}>
          <TitleHeading heading="Movies" />
          <TextInput
              style={styles.searchbar}
              // Allow TextEdit to be changed
              onChangeText={text => setState(prevState => {
                  return { ...prevState, s: text }
              })}
              onSubmitEditing={search}
              value={state.s}
          />

      <StatusBar style="auto" />
      <ScrollView style={styles.movieList}>
          {state.movieList.map(movie => (
            <TouchableHighlight 
            key={movie.imdbID} 
            onPress={() => addFavorites(movie.imdbID)}>
            <View style={styles.movie}>
              <Image
                source={{ uri: movie.Poster}}
                style={{
                  width: 300,
                  height: 300,
                }}
                resizeMode="cover"
              />
              <Text style={styles.header}>{movie.Title}</Text>
            </View>
            </TouchableHighlight>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223343',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 70,
    },
    searchbar: {
        fontSize: 20,
        fontWeight: "300",
        padding: 20,
        width: '90%',
        backgroundColor: '#fff',
        margin: 40,
        borderRadius: 8
    },
    movieList:{
      flex: 1,
    },
    movie: {
      flex: 1,
      width: "100", 
      marginBottom: 20,

    },
    header: {
      color: "#fff",
      fontSize: 32,
      fontWeight: "700", 
      backgroundColor: "#445565"
    }

});
