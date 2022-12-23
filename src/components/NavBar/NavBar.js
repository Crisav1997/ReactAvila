import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const NavBar=()=>{
    return(
   <div>
    <div className="container-fluid">
        <div className="row bgHeader">
        <div class="col-sm-9">
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
            {/* <img src={logomotor} class="logo" alt="logo" /> */}
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" href="#">Motores</a>
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