import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TitleHeading = (props) => {
    return (
        <Text style={styles.title}>Movie List</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "700", 

    }
});
export default TitleHeading;
