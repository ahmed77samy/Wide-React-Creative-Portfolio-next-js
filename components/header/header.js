import { useState } from "react";
import Link from "next/link";
import Ulitems from "./ulitems";
import Btnmenu from "./btnmenu";
import navitem from "/public/js/navbar";
import { contextNavbar } from "/public/context/index";

function Header() {
    let [status, setStatus] = useState(false);

    const toggleStatus = () => {
        setStatus(!status);
    };

    return (
        <contextNavbar.Provider value={{ menustatus: status, toggleStatus }}>
            <header className="font--one">
                <nav>
                    <div className="container-fluid">
                        <div className="row">
                            {
                                ////////// logo //////////
                            }
                            <div className="col-6 col-lg-3 d-flex align-items-center">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img
                                                src="/logo.png"
                                                alt="logo"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-6 col-lg-9 d-flex justify-content-end">
                                {
                                    ////////// menu //////////
                                }
                                <div className="menu__header">
                                    <ul className="list-unstyled d-flex m-0 text-uppercase">
                                        {navitem.map((e, i) => {
                                            return (
                                                <Ulitems details={e} key={i} />
                                            );
                                        })}
                                    </ul>
                                </div>
                                {
                                    ////////// Btn menu //////////
                                }
                                <Btnmenu />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </contextNavbar.Provider>
    );
}

export default Header;
