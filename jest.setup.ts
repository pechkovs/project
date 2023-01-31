import 'whatwg-fetch'
import '@testing-library/jest-dom'

jest.mock('react-chartjs-2', () => ({
    Pie: () => null,
    Line: () => null,
    Bar: () => null,
}))
