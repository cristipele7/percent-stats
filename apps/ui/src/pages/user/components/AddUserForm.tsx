import React from 'react'
import { Dispatch, SetStateAction, useState } from 'react'
import { Button, StyleSheet, TextInput } from 'react-native'
import { User, UserType } from 'api/types'
import { useMutation } from '@apollo/client/react'
import { CREATE_USER_MUTATION, GET_USERS_QUERY, UPDATE_USER_MUTATION } from 'api/user/user.gql'
import { useTranslation } from 'react-i18next'
import CustomView from 'src/components/CustomView'

interface AddUserFormProps {
    user?: User
    setEditId?: Dispatch<SetStateAction<string | null>>
}

const AddUserForm = (props: AddUserFormProps) => {
    const { user, setEditId } = props
    const { t } = useTranslation()

    const [createUser, { loading: loadingCreate }] = useMutation(CREATE_USER_MUTATION)
    const [updateUser, { loading: loadingUpdate }] = useMutation(UPDATE_USER_MUTATION)

    const [openForm, setOpenForm] = useState(!!user)
    const [name, setName] = useState(user?.name || '')
    const [type, setType] = useState(user?.type || UserType.Admin)

    const onAddEditUser = async () => {
        if (user) {
            await updateUser({
                variables: {
                    id: user.id,
                    data: { name, type },
                },
                refetchQueries: [{ query: GET_USERS_QUERY }, 'GetUsers'],
            })
        } else {
            await createUser({
                variables: {
                    data: { name, type },
                },
                refetchQueries: [{ query: GET_USERS_QUERY }, 'GetUsers'],
            })
        }

        setOpenForm(false)
        setName('')
        setType(UserType.Admin)
        if (setEditId) {
            setEditId(null)
        }
    }

    return (
        <CustomView>
            {openForm ? (
                <CustomView>
                    <TextInput
                        style={styles.input}
                        placeholder={t('common.name')}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />

                    <CustomView style={styles.buttons}>
                        <Button
                            title={user ? t('common.save') : t('common.add')}
                            onPress={onAddEditUser}
                            disabled={name.length < 3 || !type || loadingCreate || loadingUpdate}
                        />
                        {!user && (
                            <Button title={t('common.cancel')} onPress={() => setOpenForm(false)} />
                        )}
                    </CustomView>
                </CustomView>
            ) : (
                <Button title={t('users.addUserButton')} onPress={() => setOpenForm(true)} />
            )}
        </CustomView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    buttons: {
        flexDirection: 'row',
        paddingTop: 10,
        gap: 20,
    },
})

export default AddUserForm
