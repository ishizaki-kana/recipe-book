
export default function RecipeLayout({
    children,
    dialog
}: {
    children: React.ReactNode;
    dialog: React.ReactNode;
}) {

    return (
        <>
            {children}
            {dialog}
        </>
    );
}