import {createFileRoute, Link, Outlet, useNavigate} from '@tanstack/react-router'

export const Route = createFileRoute('/_protected')({
    component: LayoutRoute,
})

const applicationRoutes = {
    "/home": {
        label: 'Home'
    },
    "/dashboard": {
        label: 'Dashboard'
    }
}

function LayoutRoute() {
    const navigate = useNavigate();

    const logout = () => {
        navigate({
            to: '/login'
        })
    }

    return (
        <div className="portal-layout">
            <header className={'portal-header'}>
                <h3>Routing 101</h3>
            </header>

            <aside className="portal-sidebar">
                <h4>Menu</h4>
                <nav>
                    <ul style={{marginLeft: 0}}>
                        {
                            Object.entries(applicationRoutes).map(([routeURL, routeMeta]) => (
                                <li key={routeURL}>
                                    <Link style={{color: 'white'}} to={routeURL}>
                                        {routeMeta.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <button onClick={logout}>Log out</button>
                </nav>
            </aside>

            <main className="portal-main">
                <Outlet/>
            </main>
        </div>
    )
}