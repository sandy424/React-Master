import { AppHeader, AppFooter } from "./components/common"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container"></div>
        <AppFooter />
    </div>
    </ThemeProvider>
  )
}

export default App
