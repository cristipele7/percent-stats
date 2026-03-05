import { PAGES } from 'src/constants/pages'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-native'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'

const HomePage = () => {
    const { t } = useTranslation()
    const theme = useTheme()
    const themeStyles = getStyles(theme)

    return (
        <CustomView style={styles.container}>
            <Link to={PAGES.Admin}>
                <CustomText style={themeStyles.title}>{t('go_to_admin_buttom_name')}</CustomText>
            </Link>
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    thin: {
        fontFamily: 'Montserrat-Thin',
    },
    regular: {
        fontFamily: 'Montserrat-Regular',
    },
    semibold: {
        fontFamily: 'Montserrat-SemiBold',
    },
    bold: {
        fontFamily: 'Montserrat-Bold',
    },
    italic: {
        fontFamily: 'Montserrat-Italic',
        marginBottom: 20,
    },
})

export default HomePage
