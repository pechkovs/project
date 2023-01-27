import (render,screen ) from '@testing-library/react'
import { render } from 'react-dom'
import ConstructorPage from './pages/constructor/constructor'

describe ('ConstructorPage', () => {
    it ('ConstructorPage', () => {
        render (<ConstructorPage />)
    })
})
