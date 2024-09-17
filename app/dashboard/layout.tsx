const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <nav className="bg-blue-500">This is a navbar shared between all nested routes of dashboard</nav>
            {children}
        </div>
    );
}

export default Layout;