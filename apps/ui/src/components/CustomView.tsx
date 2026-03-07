import React from 'react'
import { ScrollView, ScrollViewProps, StyleProp, ViewStyle } from 'react-native'
import { getStyles, useTheme } from 'src/styles/ThemeContext'

interface CustomViewProps extends ScrollViewProps {
    style?: StyleProp<ViewStyle>
    children?: React.ReactNode
    pointerEvents?: 'auto' | 'none' | 'box-none' | 'box-only'
}

const CustomView = (props: CustomViewProps) => {
    const { style, children, pointerEvents } = props
    const theme = useTheme()
    const themStyles = getStyles(theme)

    const scrollViewStyle = pointerEvents ? [themStyles.view, { pointerEvents }] : themStyles.view
    delete props.pointerEvents

    return (
        <ScrollView
            style={scrollViewStyle}
            contentContainerStyle={[themStyles.contentView, style]}
            {...props}
        >
            {children}
        </ScrollView>
    )
}

export default CustomView
