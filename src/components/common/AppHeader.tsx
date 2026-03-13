import SignUp from "@/pages/SignUp";
import { Separator } from "../ui/separator";

function AppHeader() {
    return(
        <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-[#121212]">
            <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3 ">
                {/* 로고 & 네비게이션 메뉴 UI */}
                <div className="flex items-center gap-5">
                    <img src="src\assets\kitty.jpg" alt="@LOGO" className="w-12 h-12 cursor-pointer"/>
                    <div className="flex items-center gap-5">
                        <div className="font-semibold cursor-pointer">프로필</div>
                        <Separator orientation="vertical" className="!h-5"/>
                        <div className="font-semibold cursor-pointer">포트폴리오</div>
                    </div>  
                </div>
                
                
                {/* 로그인 UI */}
                <div className="font-semibold text-muted-foreground hover:text-white transition-all duration-500 cursor-pointer" 
                onClick={navigator(<SignUp/>)}>로그인</div>
            </div>
        </header>
    )
}
export {AppHeader}