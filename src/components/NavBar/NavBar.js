import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const NavBar=()=>{
    return(
   <div>
    <div class="container-fluid">
        <div class="row bgHeader">
        <div className="col-sm-9">
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <img src='./images/logomotor.png' className="logo" alt="logo" />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" href="#">Motores</a>
                  <a class="nav-link active" href="#">Reductores</a>
                  <a class="nav-link active" href="#">Sensores</a>
                  <a class="nav-link active" href="#">Iluminacion</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <CartWidget />
    </div>
    </div>
    </div>
    )
}

export default NavBar;