import {Text, View, StyleSheet} from 'react-native';
import * as React from 'react';


const HomeScreen = () => {
    return ( 
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default HomeScreen;