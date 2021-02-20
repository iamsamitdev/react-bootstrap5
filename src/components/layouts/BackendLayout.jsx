import {House, Book, Heart, Envelope} from 'react-bootstrap-icons';
const BackendLayout = ({children}) => {
    return (
        <div className="container-fluid">
            <div className="row min-vh-100 flex-column flex-md-row">
                <aside className="col-12 col-lg-2 col-md-3 col-xs-2 p-0 bg-dark flex-shrink-1">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top" id
                    ="sidebar">
                        <div className="text-center p-3 mt-5 col-md-8">
                            <img src="assets/images/samit-profile.jpg" alt="" className="img-fluid rounded-circle my-4 p-1 d-none d-md-block shadow"/>
                            <a href="#" className="navbar-brand mx-0 font-weight-bold text-nowrap">IT Genius</a>
                        </div>
                        <button type="button" className="navbar-toggler border-0 order-1" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse order-last" id="nav">
                            <ul className="navbar-nav flex-column w-100 justify-content-center">
                                <li className="nav-item text-start">
                                    <a href="#" className="nav-link active">Edit Profile</a>
                                </li>
                                <li className="nav-item text-start">
                                    <a href="#" className="nav-link active">Project</a>
                                </li>
                                <li className="nav-item text-start">
                                    <a href="#" className="nav-link active">Task</a>
                                </li>
                                <li className="nav-item text-start">
                                    <a href="#" className="nav-link active">User Info</a>
                                </li>
                            </ul>
                        </div>
                        <ul className="nav justify-content-center d-md-none">
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">
                                    <House />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">
                                    <Book />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">
                                    <Heart />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">
                                    <Envelope />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <main className="col px-0 flex-grow-1">
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                        </div>
                    </nav>

                    <div className="container pt-5 pb-3">
                        <article className="pt-5">
                            {children}
                        </article>
                    </div>
                </main>

            </div>
        </div>
    )
}

export default BackendLayout
