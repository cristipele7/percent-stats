import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { REMOVE_USER_MUTATION, GET_USERS_QUERY } from 'api/user/user.gql'
import { useMutation, useQuery } from '@apollo/client/react'
import { User } from 'api/types'
import { useTranslation } from 'react-i18next'
import HomeLink from './components/HomeLink'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'

const AdminPage = () => {
    const { t } = useTranslation()
    const theme = useTheme()
    const themeStyles = getStyles(theme)

    const { data: usersData, loading, error } = useQuery<{ users: User[] }>(GET_USERS_QUERY)
    const [removeUser, { loading: loadingRemove }] = useMutation(REMOVE_USER_MUTATION)

    return (
        <CustomView style={styles.container}>
            <HomeLink />

            {loading && <CustomText style={themeStyles.title}>{t('loading_message')}</CustomText>}
            {error && <CustomText style={themeStyles.error}>{error.message}</CustomText>}

            {usersData?.users?.map((user: User, index: number) => (
                <CustomView key={user.id}>ceva</CustomView>
            ))}
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
})

export default AdminPage
