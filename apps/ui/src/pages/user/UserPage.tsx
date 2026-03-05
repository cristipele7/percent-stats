import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { useMutation, useQuery } from '@apollo/client/react'
import { GET_USER_QUERY } from 'api/user/user.gql'
import { User } from 'api/types'
import { useState } from 'react'
import { Link, useParams } from 'react-router-native'
import { PAGES } from 'src/constants/pages'
import { useTranslation } from 'react-i18next'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'

const UserPage = () => {
    const { t } = useTranslation()
    const { id } = useParams()
    const theme = useTheme()
    const themeStyles = getStyles(theme)

    const {
        data: userData,
        loading,
        error,
    } = useQuery<{ user: User }>(GET_USER_QUERY, {
        variables: { id },
    })

    const [editId, setEditId] = useState<string | null>(null)

    return (
        <CustomView style={styles.container}>
            <Link to={PAGES.Users}>
                <CustomText style={styles.backButton}>{t('common.back')}</CustomText>
            </Link>

            {loading && <CustomText style={themeStyles.title}>{t('common.loading')}</CustomText>}
            {error && <CustomText style={themeStyles.error}>{error.message}</CustomText>}

            {userData?.user && (
                <CustomText style={[themeStyles.title, styles.title]}>
                    {userData.user.name} ({t(`users.types.${userData.user.type}`)})
                </CustomText>
            )}
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    backButton: {
        marginBottom: 50,
    },
    title: {
        textDecorationLine: 'none',
    },
    productContainer: {
        flexDirection: 'row',
    },
    button: {
        paddingLeft: 20,
    },
})

export default UserPage
