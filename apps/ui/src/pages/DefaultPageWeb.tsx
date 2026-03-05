import { PAGES } from 'src/constants/pages'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-native'

const DefaultPageWeb = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const lastPage = localStorage.getItem('lastPage')
        if (lastPage) {
            navigate(lastPage)
        } else {
            navigate(PAGES.Home)
        }
    }, []) // eslint-disable-line

    return null
}

export default DefaultPageWeb
