import {GlobalConstants} from "./Common/global-constants.ts";

export function Navbar() {


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/workspace/index">Workspaces</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>


                            {GlobalConstants.isLoggedIn ? <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                        Create
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/workspace/create">Create a workspace</a>
                                        </li>
                                        <li><a className="dropdown-item" href="/board/create">Create a Board</a></li>
                                    </ul>
                                </li> :
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                        Connections
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/login">Login</a></li>
                                        <li><a className="dropdown-item" href="/register">Register</a></li>
                                    </ul>
                                </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}