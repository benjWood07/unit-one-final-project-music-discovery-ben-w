import { Link } from 'react-router';

const NavMenu = () => {
    return (
        <div>
            <Link>
                Home
            </Link>
            <Link>
                About
            </Link>
            <Link>
                Playlists
            </Link>
            <Link>
                Sources
            </Link>
            <Link>
                IHY Community
            </Link>
        </div>
    );
};

export default NavMenu;