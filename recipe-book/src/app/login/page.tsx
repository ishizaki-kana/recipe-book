import LoginForm from "@/components/features/login/LoginForm";
import CenteredContainer from "@/components/layout/container/CenteredContainer";
import { getUserFromAuthToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
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