import { screen } from '@testing-library/react'
import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

describe('<Logo/>', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/beauty for all/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="darkGray" />)
    expect(screen.getByLabelText(/beauty for all/i).parentElement).toHaveStyle({
      color: '#434343'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/beauty for all/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should hide the text if passed', () => {
    renderWithTheme(<Logo hideText />)
    expect(screen.getByTestId(/text/i)).not.toBeVisible()
  })
})
