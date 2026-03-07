import React from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import { getStyles, useTheme } from 'src/styles/ThemeContext'

interface CustomTextProps extends TextProps {
    style?: StyleProp<TextStyle>
    children?: React.ReactNode
}

const CustomText = (props: CustomTextProps) => {
    const { style, children } = props
    const theme = useTheme()
    const themeStyles = getStyles(theme)

    return (
        <Text style={[themeStyles.text, style]} {...props}>
            {children}
        </Text>
    )
}

export default CustomText
