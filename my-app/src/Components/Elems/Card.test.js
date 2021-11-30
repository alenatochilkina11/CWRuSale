import { render, screen } from '@testing-library/react';
import Card from './Card'
import ReactDOM from 'react-dom'

it("Card renders without crashing", ()=> {
    const div = document.createElement("div")
    ReactDOM.render(<Card></Card>, div)
})