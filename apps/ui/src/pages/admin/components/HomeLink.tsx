import { Link } from 'react-router-native'
import { PAGES } from 'src/constants/pages'
import { useTranslation } from 'react-i18next'
import React from 'react'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'

export default function HomeLink() {
    const { t } = useTranslation()
    const theme = useTheme()
    const themeStyles = getStyles(theme)

    return (
        <CustomView>
            <Link to={PAGES.Home}>
                <CustomText style={themeStyles.title}>{t('back_home_buttom_name')}</CustomText>
            </Link>
        </CustomView>
    )
}
