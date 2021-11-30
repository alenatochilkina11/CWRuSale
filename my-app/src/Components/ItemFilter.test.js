import { render, screen } from '@testing-library/react';
import ItemFilter from './ItemFilter'
import ReactDOM from 'react-dom'

it("Filter renders without crashing", ()=> {
    const div = document.createElement("div")
    ReactDOM.render(<ItemFilter />, div)
})