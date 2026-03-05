import i18n from 'i18n'
import React from 'react'
import { StyleSheet, Button } from 'react-native'
import CustomView from './CustomView'

const LocaleSwitcher = () => {
    const changeLanguage = (value: 'en' | 'ro') => {
        i18n.changeLanguage(value)
    }

    return (
        <CustomView style={styles.container}>
            <Button title="en" onPress={() => changeLanguage('en')} />
            <Button title="ro" onPress={() => changeLanguage('ro')} />
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        padding: 30,
    },
})

export default LocaleSwitcher
