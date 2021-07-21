import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const SearchBar = (props) => {
    return (
        <TextInput
            style={styles.searchbar}
            value = "Enter a movie..."
        />
    );
};

const styles = StyleSheet.create({
    searchbar: {
        fontSize: 20,
        fontWeight: "300",
        padding: 20,
        width: '90%',
        backgroundColor: '#fff',
        margin: 40,
        borderRadius: 8

    }
});
export default SearchBar;