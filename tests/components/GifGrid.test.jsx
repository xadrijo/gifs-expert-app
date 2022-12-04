import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('<GifGrid />', () => {
    
    const category = 'One Punch'

    test('should show loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category } /> )

        expect( screen.getByText('Loading...') )
        expect( screen.getByText( category ) )
    })
    
    test('should show items when useFetchGifs loads images', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://testurl/photo.jpg'
            },
            {
                id: '123',
                title: 'Gpku',
                url: 'https://testurl/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={ category } /> )
      
        expect( screen.getAllByRole('img').length ).toBe(2)
    })
    
})
