import { screen } from '@testing-library/react';
import { FaveButton } from ".";

describe('FaveButton', () => {
    beforeEach(() => {
        render(<FaveButton />)
    })

    test('renders a span with a heart inside', () => {
        let starThing = screen.queryByRole('switch');
        expect(starThing.textContent).toContain('❤');
    })

    test ('changes colour of heart when clicked',()=> {
        let starThing = screen.queryByRole('switch');
        let startingColour = starThing.style.color;
        userEvent.click(starThing);
        let newColour = starThing.style.color;
        expect(newColour).not.toBe(startingColour);
    })
})

