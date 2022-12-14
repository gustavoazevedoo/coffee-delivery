import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { CartProvider } from './contexts/CartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartProvider>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}
