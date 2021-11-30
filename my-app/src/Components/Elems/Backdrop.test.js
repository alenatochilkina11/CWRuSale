import { render, screen } from '@testing-library/react';
import Backdrop from './Backdrop'
import ReactDOM from 'react-dom'

it("Backdrop renders without crashing", ()=> {
    const div = document.createElement("div")
    ReactDOM.render(<Backdrop />, div)
})