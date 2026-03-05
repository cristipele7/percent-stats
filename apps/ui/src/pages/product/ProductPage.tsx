import React from 'react'
import { StyleSheet } from 'react-native'
import { useQuery } from '@apollo/client/react'
import { GET_PRODUCT_QUERY } from 'api/product/product.gql'
import { PAGES } from 'src/constants/pages'
import { Link, useParams } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import CustomText from 'src/components/CustomText'
import CustomView from 'src/components/CustomView'
import { getStyles, useTheme } from 'src/styles/ThemeContext'
import { Product } from 'api/types'

const ProductPage = () => {
    const { t } = useTranslation()
    const { id } = useParams()
    const theme = useTheme()
    const themeStyles = getStyles(theme)

    const { data, loading, error } = useQuery<{ product: Product }>(GET_PRODUCT_QUERY, {
        variables: { id },
    })

    return (
        <CustomView style={styles.container}>
            {loading && <CustomText style={themeStyles.title}>{t('common.loading')}</CustomText>}
            {error && <CustomText style={themeStyles.error}>{error.message}</CustomText>}

            {data?.product && (
                <CustomView style={styles.productContainer}>
                    <CustomText>
                        {data?.product.name} ({t(`products.types.${data?.product.type}`)}) -{' '}
                    </CustomText>
                    <Link to={PAGES.User.replace(':id', data?.product.userId)}>
                        <CustomText style={themeStyles.title}>{data?.product.user.name}</CustomText>
                    </Link>
                </CustomView>
            )}
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    productContainer: {
        flexDirection: 'row',
    },
})

export default ProductPage
