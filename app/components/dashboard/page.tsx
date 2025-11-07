
import {Header} from "@/app/components/dashboard/header";
import Sidebar from "@/app/components/dashboard/sidebar";
import HotCollections from "@/app/components/dashboard/hot-collections";
import RegularCollections from "@/app/components/dashboard/reguler-collections";
import TopBar from "@/app/components/dashboard/topBar";

export default function Dashboard() {
    return (<>
        <main >

            <div className="pl-32 space-y-8 space-x-8">
                <Header/>
                <HotCollections/>
                <RegularCollections/>
            </div>
        </main>
    </>)
}