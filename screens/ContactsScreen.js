import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ContactsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Contacts</Text>
        </View>
    )
}

export default ContactsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
