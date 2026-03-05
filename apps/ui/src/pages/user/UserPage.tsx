import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { useMutation, useQuery } from '@apollo/client/react'
import { GET_USER_QUERY } from 'api/user/user.gql'
import { Product, User } from 'api/types'
import { useState } from 'react'
import { REMOVE_PRODUCT_MUTATION } from 'api/product/product.gql'
import { Link, useParams } from 'react-router-native'
import AddProductForm from '../product/components/AddProductForm'
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
    const [removeProduct, { loading: loadingRemove }] = useMutation(REMOVE_PRODUCT_MUTATION)

    const [editId, setEditId] = useState<string | null>(null)

    const onRemoveProduct = async (productId: string) => {
        await removeProduct({
            variables: {
                id: productId,
            },
            refetchQueries: [{ query: GET_USER_QUERY, variables: { id } }, 'GetUser'],
        })
    }

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

            <CustomText style={themeStyles.title}>{t('common.products')}</CustomText>
            {!loading && !error && !userData?.user?.products?.length && (
                <CustomText>{t('products.noProducts')}</CustomText>
            )}

            {userData?.user?.products?.map((product: Product, index: number) => (
                <CustomView key={product.id}>
                    <CustomView style={styles.productContainer}>
                        <CustomView style={styles.productContainer}>
                            <CustomText>{index + 1}. </CustomText>
                            <Link to={PAGES.Product.replace(':id', product.id)}>
                                <CustomText style={themeStyles.title}>{product.name}</CustomText>
                            </Link>
                            <CustomText> ({t(`products.types.${product.type}`)})</CustomText>
                        </CustomView>
                        <CustomView style={styles.button}>
                            <Button
                                title={
                                    editId === product.id ? t('common.cancel') : t('common.edit')
                                }
                                onPress={() =>
                                    setEditId((prevEditedId) =>
                                        prevEditedId === product.id ? null : product.id,
                                    )
                                }
                            />
                        </CustomView>
                        <CustomView style={styles.button}>
                            <Button
                                title={t('common.remove')}
                                onPress={() => onRemoveProduct(product.id)}
                                disabled={loadingRemove}
                            />
                        </CustomView>
                    </CustomView>

                    {editId === product.id && (
                        <AddProductForm userId={id} product={product} setEditId={setEditId} />
                    )}
                </CustomView>
            ))}

            <AddProductForm userId={id} setEditId={setEditId} />
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
