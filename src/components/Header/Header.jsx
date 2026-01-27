import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom';

const NAV = [
    {
        route: '/',
        name: 'Home',
    },
    {
        route: '/catalog',
        name: 'Catalog',
    },
];

export default function Header() {
    const location = useLocation();

    const isActiveLink = (route) => {
        // For catalog, only highlight when exactly on /catalog, not on /catalog/:id
        if (route === '/catalog') {
            return location.pathname === '/catalog';
        }
        // For home, exact match
        return location.pathname === route;
    };

    return (
        <header className="py-[26px] bg-inputs">
            <div className="container relative flex justify-center">
                <NavLink to="/" className="absolute top-1/2 -translate-y-1/2 left-0">
                    <img src="/logo.svg" alt="TravelTrucks" />
                </NavLink>
                {NAV.map(({ route, name }) => (
                    <NavLink
                        key={name}
                        to={route}
                        className={clsx('mx-4 leading-5 font-medium', {
                            'text-button-hover': isActiveLink(route),
                        })}
                    >
                        {name}
                    </NavLink>
                ))}
            </div>
        </header>
    );
}