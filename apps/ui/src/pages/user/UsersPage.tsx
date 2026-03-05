import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { REMOVE_USER_MUTATION, GET_USERS_QUERY } from 'api/user/user.gql'
import { useMutation, useQuery } from '@apollo/client/react'
import { User } from 'api/types'
import { useState } from 'react'
import AddUserForm from './components/AddUserForm'
import { PAGES } from 'src/constants/pages'
import { useTranslation } from 'react-i18next'
import HomeLink from './components/HomeLink'
import { Link } from 'react-router-native'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'

const UsersPage = () => {
    const { t } = useTranslation()
    const theme = useTheme()
    const themeStyles = getStyles(theme)

    const { data: usersData, loading, error } = useQuery<{ users: User[] }>(GET_USERS_QUERY)
    const [removeUser, { loading: loadingRemove }] = useMutation(REMOVE_USER_MUTATION)

    const [editId, setEditId] = useState<string | null>(null)

    const onRemoveUser = async (userId: string) => {
        await removeUser({
            variables: {
                id: userId,
            },
            refetchQueries: [{ query: GET_USERS_QUERY }, 'GetUsers'],
        })
    }

    return (
        <CustomView style={styles.container}>
            <HomeLink />

            {loading && <CustomText style={themeStyles.title}>{t('common.loading')}</CustomText>}
            {error && <CustomText style={themeStyles.error}>{error.message}</CustomText>}

            {usersData?.users?.map((user: User, index: number) => (
                <CustomView key={user.id}>
                    <CustomView style={styles.userContainer}>
                        <CustomView style={styles.userContainer}>
                            <CustomText>{index + 1}. </CustomText>
                            <Link to={PAGES.User.replace(':id', user.id)}>
                                <CustomText style={themeStyles.title}>{user.name}</CustomText>
                            </Link>
                            <CustomText>({t(`users.types.${user.type}`)})</CustomText>
                        </CustomView>
                        <CustomView style={styles.button}>
                            <Button
                                title={editId === user.id ? t('common.cancel') : t('common.edit')}
                                onPress={() =>
                                    setEditId((prevEditedId) =>
                                        prevEditedId === user.id ? null : user.id,
                                    )
                                }
                            />
                        </CustomView>
                        <CustomView style={styles.button}>
                            <Button
                                title={t('common.remove')}
                                onPress={() => onRemoveUser(user.id)}
                                disabled={loadingRemove}
                            />
                        </CustomView>
                    </CustomView>

                    {editId === user.id && <AddUserForm user={user} setEditId={setEditId} />}
                </CustomView>
            ))}

            <AddUserForm />
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    userContainer: {
        flexDirection: 'row',
    },
    text: {
        alignItems: 'center',
    },
    button: {
        paddingLeft: 20,
    },
})

export default UsersPage
