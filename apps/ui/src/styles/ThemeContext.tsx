import React, { createContext, useContext, ReactNode } from 'react'
import { Platform, StyleSheet } from 'react-native'

interface Theme {
    colors: {
        background: {
            primary: string
        }
        text: {
            primary: string
            secondary: string
            error: string
        }
    }
    typography: {
        fontSize: {
            small: number
            medium: number
            large: number
        }
        fontFamily: {
            primary: string
        }
    }
    spacing: {
        small: number
        medium: number
        large: number
    }
}

const defaultTheme: Theme = {
    colors: {
        background: {
            primary: 'lightgray',
        },
        text: {
            primary: 'darkgreen',
            secondary: 'gray',
            error: 'red',
        },
    },
    typography: {
        fontSize: {
            small: Platform.OS === 'web' ? 12 : 10,
            medium: Platform.OS === 'web' ? 14 : 12,
            large: Platform.OS === 'web' ? 20 : 18,
        },
        fontFamily: {
            primary: 'Montserrat-Regular',
        },
    },
    spacing: {
        small: 8,
        medium: 16,
        large: 24,
    },
}

const ThemeContext = createContext<Theme>(defaultTheme)

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

export const getStyles = (theme: Theme) =>
    StyleSheet.create({
        view: {
            display: 'flex',
            backgroundColor: theme.colors.background.primary,
        },
        contentView: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        row: {
            display: 'flex',
        },
        col: {
            display: 'flex',
            flexDirection: 'column',
        },
        title: {
            fontSize: theme.typography.fontSize.large,
            color: theme.colors.text.primary,
            padding: theme.spacing.medium,
        },
        text: {
            fontSize: theme.typography.fontSize.medium,
            color: theme.colors.text.secondary,
            fontFamily: theme.typography.fontFamily.primary,
        },
        error: {
            fontSize: theme.typography.fontSize.small,
            color: theme.colors.text.error,
        },
    })
