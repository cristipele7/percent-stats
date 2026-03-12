import React from 'react'
import { NativeRouter, Route, Routes } from 'react-router-native'
import HomePage from 'src/pages/HomePage'
import AdminPage from 'src/pages/admin'
import { ApolloProvider } from '@apollo/client/react'
import { PAGES } from 'src/constants/pages'
import LocaleSwitcher from 'src/components/LocaleSwitcher'
import { Platform } from 'react-native'
import DefaultPageWeb from 'src/pages/DefaultPageWeb'
import ChangePageListenerWeb from 'src/components/ChangePageListenerWeb'
import { ThemeProvider } from 'src/styles/ThemeContext'
import CustomView from 'src/components/CustomView'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import LeaguesPage from 'src/pages/admin/leagues'
import TeamsPage from 'src/pages/admin/teams'
import MatchesPage from 'src/pages/matches'

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
                            <Route path={PAGES.Admin} Component={AdminPage} />
                            <Route path={`${PAGES.Leagues}/:countryId`} Component={LeaguesPage} />
                            <Route path={`${PAGES.Teams}/:countryId`} Component={TeamsPage} />
                            <Route path={PAGES.Matches} Component={MatchesPage} />
                        </Routes>
                    </CustomView>
                </NativeRouter>
            </ApolloProvider>
        </ThemeProvider>
    )
}

export default App
