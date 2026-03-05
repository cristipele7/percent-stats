import React from 'react'
import { Dispatch, SetStateAction, useState } from 'react'
import { Button, StyleSheet, TextInput } from 'react-native'
import { Product, ProductType } from 'api/types'
import { useMutation } from '@apollo/client/react'
import { CREATE_PRODUCT_MUTATION, UPDATE_PRODUCT_MUTATION } from 'api/product/product.gql'
import { GET_USER_QUERY } from 'api/user/user.gql'
import { useTranslation } from 'react-i18next'
import CustomView from 'src/components/CustomView'

interface AddProductFormProps {
    userId: string
    product?: Product
    setEditId?: Dispatch<SetStateAction<string | null>>
}

const AddProductForm = (props: AddProductFormProps) => {
    const { userId, product, setEditId } = props
    const { t } = useTranslation()

    const [createProduct, { loading: loadingCreate }] = useMutation(CREATE_PRODUCT_MUTATION)
    const [updateProduct, { loading: loadingUpdate }] = useMutation(UPDATE_PRODUCT_MUTATION)

    const [openForm, setOpenForm] = useState(!!product)
    const [name, setName] = useState(product?.name || '')
    const [type, setType] = useState(product?.type || ProductType.Clothes)

    const onAddEditProduct = async () => {
        if (product) {
            await updateProduct({
                variables: {
                    id: product.id,
                    data: {
                        name,
                        type,
                        user: {
                            connect: {
                                id: userId,
                            },
                        },
                    },
                },
                refetchQueries: [{ query: GET_USER_QUERY, variables: { id: userId } }, 'GetUser'],
            })
        } else {
            await createProduct({
                variables: {
                    data: {
                        name,
                        type,
                        user: {
                            connect: {
                                id: userId,
                            },
                        },
                    },
                },
                refetchQueries: [{ query: GET_USER_QUERY, variables: { id: userId } }, 'GetUser'],
            })
        }

        setOpenForm(false)
        setName('')
        setType(ProductType.Clothes)
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
                            title={product ? t('common.save') : t('common.add')}
                            onPress={onAddEditProduct}
                            disabled={name.length < 3 || !type || loadingCreate || loadingUpdate}
                        />
                        {!product && (
                            <Button title={t('common.cancel')} onPress={() => setOpenForm(false)} />
                        )}
                    </CustomView>
                </CustomView>
            ) : (
                <Button title={t('products.addProductButton')} onPress={() => setOpenForm(true)} />
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
        marginBottom: 30,
    },
})

export default AddProductForm
