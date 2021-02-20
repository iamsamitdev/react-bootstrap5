/* eslint-disable jsx-a11y/anchor-is-valid */
import {BootstrapFill, House, Book, Heart, Envelope} from 'react-bootstrap-icons';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
         <BootstrapFill /> สถาบันไอทีจีเนียส
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
              <House /> หน้าหลัก
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
              <Book />  เกี่ยวกับเรา
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
              <Heart />  บริการ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
              <Envelope />  ติดต่อเรา
              </a>
            </li>        
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="ป้อนคำค้นหา"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              ค้นหา
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
