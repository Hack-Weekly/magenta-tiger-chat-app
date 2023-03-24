import dynamic from "next/dynamic"
import { useAuth } from "../context/AuthContext"
import { Header, Input } from "ui"
import Head from "next/head"

export default function Web() {
    const { user } = useAuth()

    const DynamicLayout = dynamic(() => import("../components/Layout"), {
        ssr: false,
    })

    return (
        <DynamicLayout>
            <Head>
                <title>Home</title>
            </Head>
            {/* Put here already styled Home page component & remove Header! */}
            <Header
                variant="welcome"
                userName={user ? user?.username : "Guest"}
            />
            <Input variant="search" />
        </DynamicLayout>
    )
}
