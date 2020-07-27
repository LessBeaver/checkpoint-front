import React from 'react';

export default function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light Navigation">
        <a class="navbar-brand" href="/signin">
          Portfolio
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link NavLink" href="/accueil">
                Accueil<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link NavLink" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link NavLink" href="/gestionnaire">
                Gestionnaire
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle NavLink"
                href="/se-connecter"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Se connecter
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item NavLink" href="/connexion">
                  Connexion
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item NavLink" href="/inscription">
                  Inscription
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle NavLink"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Recherche
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2 NavLink"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
