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
            <Link to={PAGES.Users}>
                <CustomText style={themeStyles.title}>{t('common.users')}</CustomText>
            </Link>

            <CustomText style={styles.thin}>{t('common.users')} - Montserrat Thin</CustomText>
            <CustomText style={styles.regular}>{t('common.users')} - Montserrat Regular</CustomText>
            <CustomText style={styles.semibold}>
                {t('common.users')} - Montserrat SemiBold
            </CustomText>
            <CustomText style={styles.bold}>{t('common.users')} - Montserrat Bold</CustomText>
            <CustomText style={styles.italic}>{t('common.users')} - Montserrat Italic</CustomText>

            <CustomText style={styles.thin}>{t('common.users')} - Montserrat Thin</CustomText>
            <CustomText style={styles.regular}>{t('common.users')} - Montserrat Regular</CustomText>
            <CustomText style={styles.semibold}>
                {t('common.users')} - Montserrat SemiBold
            </CustomText>
            <CustomText style={styles.bold}>{t('common.users')} - Montserrat Bold</CustomText>
            <CustomText style={styles.italic}>{t('common.users')} - Montserrat Italic</CustomText>

            <CustomText style={styles.thin}>{t('common.users')} - Montserrat Thin</CustomText>
            <CustomText style={styles.regular}>{t('common.users')} - Montserrat Regular</CustomText>
            <CustomText style={styles.semibold}>
                {t('common.users')} - Montserrat SemiBold
            </CustomText>
            <CustomText style={styles.bold}>{t('common.users')} - Montserrat Bold</CustomText>
            <CustomText style={styles.italic}>{t('common.users')} - Montserrat Italic</CustomText>

            <CustomText style={styles.thin}>{t('common.users')} - Montserrat Thin</CustomText>
            <CustomText style={styles.regular}>{t('common.users')} - Montserrat Regular</CustomText>
            <CustomText style={styles.semibold}>
                {t('common.users')} - Montserrat SemiBold
            </CustomText>
            <CustomText style={styles.bold}>{t('common.users')} - Montserrat Bold</CustomText>
            <CustomText style={styles.italic}>{t('common.users')} - Montserrat Italic</CustomText>

            <CustomText style={styles.thin}>{t('common.users')} - Montserrat Thin</CustomText>
            <CustomText style={styles.regular}>{t('common.users')} - Montserrat Regular</CustomText>
            <CustomText style={styles.semibold}>
                {t('common.users')} - Montserrat SemiBold
            </CustomText>
            <CustomText style={styles.bold}>{t('common.users')} - Montserrat Bold</CustomText>
            <CustomText style={styles.italic}>{t('common.users')} - Montserrat Italic</CustomText>

            <CustomText style={styles.thin}>{t('common.users')} - Montserrat Thin</CustomText>
            <CustomText style={styles.regular}>{t('common.users')} - Montserrat Regular</CustomText>
            <CustomText style={styles.semibold}>
                {t('common.users')} - Montserrat SemiBold
            </CustomText>
            <CustomText style={styles.bold}>{t('common.users')} - Montserrat Bold</CustomText>
            <CustomText style={styles.italic}>{t('common.users')} - Montserrat Italic</CustomText>

            <CustomText style={styles.thin}>{t('common.users')} - Montserrat Thin</CustomText>
            <CustomText style={styles.regular}>{t('common.users')} - Montserrat Regular</CustomText>
            <CustomText style={styles.semibold}>
                {t('common.users')} - Montserrat SemiBold
            </CustomText>
            <CustomText style={styles.bold}>{t('common.users')} - Montserrat Bold</CustomText>
            <CustomText style={styles.italic}>{t('common.users')} - Montserrat Italic</CustomText>

            <CustomText style={styles.thin}>{t('common.users')} - Montserrat Thin</CustomText>
            <CustomText style={styles.regular}>{t('common.users')} - Montserrat Regular</CustomText>
            <CustomText style={styles.semibold}>
                {t('common.users')} - Montserrat SemiBold
            </CustomText>
            <CustomText style={styles.bold}>{t('common.users')} - Montserrat Bold</CustomText>
            <CustomText style={styles.italic}>{t('common.users')} - Montserrat Italic</CustomText>
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
