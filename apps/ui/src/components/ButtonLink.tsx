import { Link } from 'react-router-native'
import { PagesType } from 'src/constants/pages'
import React from 'react'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'

interface ButtonLinkProps {
    title: string
    toPage: PagesType
}

export default function ButtonLink(props: ButtonLinkProps) {
    const { title, toPage } = props

    const theme = useTheme()
    const themeStyles = getStyles(theme)

    return (
        <CustomView>
            <Link to={toPage}>
                <CustomText style={themeStyles.title}>{title}</CustomText>
            </Link>
        </CustomView>
    )
}
