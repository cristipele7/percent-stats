import React from 'react'
import { NativeRouter, Route, Routes } from 'react-router-native'
import HomePage from 'src/pages/HomePage'
import UsersPage from 'src/pages/user/UsersPage'
import UserPage from 'src/pages/user/UserPage'
import { ApolloProvider } from '@apollo/client/react'
import ProductPage from 'src/pages/product/ProductPage'
import { PAGES } from 'src/constants/pages'
import LocaleSwitcher from 'src/components/LocaleSwitcher'
import { Platform } from 'react-native'
import DefaultPageWeb from 'src/pages/DefaultPageWeb'
import ChangePageListenerWeb from 'src/components/ChangePageListenerWeb'
import { ThemeProvider } from 'src/styles/ThemeContext'
import CustomView from 'src/components/CustomView'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql',
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

export const App = () => {
    return (
        <ThemeProvider>
            <ApolloProvider client={client}>
                <NativeRouter
                    future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                    }}
                >
                    <CustomView>
                        <LocaleSwitcher />
                        {Platform.OS === 'web' && <ChangePageListenerWeb />}

                        <Routes>
                            <Route
                                path={PAGES.Default}
                                Component={Platform.OS === 'web' ? DefaultPageWeb : HomePage}
                            />
                            <Route path={PAGES.Home} Component={HomePage} />
                            <Route path={PAGES.Users} Component={UsersPage} />
                            <Route path={PAGES.User} Component={UserPage} />
                            <Route path={PAGES.Product} Component={ProductPage} />
                        </Routes>
                    </CustomView>
                </NativeRouter>
            </ApolloProvider>
        </ThemeProvider>
    )
}

export default App
