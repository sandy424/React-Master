import { Skeleton } from "../ui"

function HotTopic() {
    return(
        <div className="w-full flex flex-col gap-2">
            <Skeleton className="w-full h-70"/>
            <div className="flex items-center gap0-2">
                <Skeleton className="w-10 h-10 rounded-full"/>
                <div className="flex flex-col gap-2 ml-2">
                    <Skeleton className="w-32 h-3" />
                    <Skeleton className="w-20 h-[14px]" />
                </div>
            </div>
        </div>
    )
}
export {HotTopic}