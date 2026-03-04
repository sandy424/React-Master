import { AppHeader, AppFooter, AppSidebar } from "./components/common"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container">
          <main className="w-full h-full min-h-[720px] flex p-6 gap-6">
              {/* 카테고리 사이드바 */}
              <AppSidebar/>
              {/* 토픽 콘텐츠 */}
<<<<<<< HEAD
              <section></section>
=======
              <section className="flex-1 flex flex-col gap-12">
                  {/* 핫 토픽 */}
                  <div className="w-full flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <img src="src\assets\fire.png" alt="@IMG" className="w-7 h-7" />
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">HOT 토픽</h4>
                      </div>
                      <p className="text-muted-foreground">지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를 얻어보세요.</p>
                    </div>
                    <div className="grid grid-cols-4 gap-6"></div>
                  </div>
                  {/* 뉴 토픽 */}
              </section>
>>>>>>> 941ad31 (재부팅)
          </main>
        </div>
        <AppFooter />
    </div>
    </ThemeProvider>
  )
}

export default App
