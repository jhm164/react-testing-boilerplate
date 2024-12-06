import React  from 'react';
import {render,screen} from "@testing-library/react"
import Card from '../Card'
import userEvent from '@testing-library/user-event';
test( "Simple Render",()=>{
    render(<Card />)
})

test( "Props testing functional component string",async ()=>{
   const demo1 = render(<Card />)
    const button = screen.getByTestId('democlick'); // Use getByTestId for a single element
    console.log("")
    await userEvent.click(button); // Async click, in case
    expect(screen.getByText('cena')).toBeInTheDocument();

})