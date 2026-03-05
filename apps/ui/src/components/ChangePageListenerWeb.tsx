import { PAGES } from 'src/constants/pages'
import { useEffect } from 'react'
import { useLocation } from 'react-router-native'

const ChangePageListenerWeb = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== PAGES.Default) {
            localStorage.setItem('lastPage', location.pathname)
        }
    }, [location.pathname])

    return null
}

export default ChangePageListenerWeb
