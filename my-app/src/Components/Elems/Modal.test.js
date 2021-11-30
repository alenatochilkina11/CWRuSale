import { render, screen } from '@testing-library/react';
import Modal from './Modal'
import ReactDOM from 'react-dom'

it("Modal renders without crashing", ()=> {
    const div = document.createElement("div")
    ReactDOM.render(<Modal text='rendered' />, div)
})