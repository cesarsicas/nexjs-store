'use client';
import "bootstrap/dist/css/bootstrap.min.css";
import "../basic.css";
import {useEffect} from "react";
export function CustomerNavBar(){
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/customer" className="nav-link px-2 link-body-emphasis">Home</a></li>
                        <li><a href="/customer/categories" className="nav-link px-2 link-body-emphasis">Categorias</a></li>
                        <li><a href="/customer/cart" className="nav-link px-2 link-body-emphasis">Carrinho</a></li>
                        <li><a href="#" className="nav-link px-2 link-body-emphasis">Ofertas</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control" placeholder="Buscar..." aria-label="Search"/>
                    </form>

                    <div className="text-end">
                        <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"
                                 className="rounded-circle"/>
                        </a>
                        <ul className="dropdown-menu text-small">
                            <li><a className="dropdown-item" href="#">Perfil</a></li>
                            <li><a className="dropdown-item" href="#">Compras</a></li>
                            <li><a className="dropdown-item" href="#">Cartões</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

    );


}