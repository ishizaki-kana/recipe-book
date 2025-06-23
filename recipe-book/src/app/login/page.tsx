import LoginForm from "@/components/features/login/loginForm/LoginForm";
import CenteredContainer from "@/components/layout/container/center/CenteredContainer";
import { getUserFromAuthToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const user = await getUserFromAuthToken();

    // すでにログイン済みのとき
    if (user) {
        redirect('/recipe');
    }

    return (
        <CenteredContainer>
            <LoginForm />
        </CenteredContainer>
    )
}