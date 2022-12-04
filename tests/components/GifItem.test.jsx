import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('<GifItem />', () => {

    const title = 'Goku'
    const url = 'https://goku.com/goku.jpg'

    test('should match with snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> )
        expect( container ).toMatchSnapshot()
    })

    test('should show image with URL and ALT', () => {
        render( <GifItem title={ title } url={ url } /> )

        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( alt )
    })
    
    test("should show component's title", () => {
        render( <GifItem title={ title } url={ url } /> )
        expect( screen.getByText( title )).toBeTruthy()
    })
    
})
