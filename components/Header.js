import Head from 'next/head'
import React, { Fragment } from "react";
import Link from 'next/link'

export default function Header() {
    return (
        <Fragment>
            <header className="header">
                <a href="#">
                    <img className="alliance-logo" src="/assets/da-logo-blanco.png" alt="digital alliance"/>
                </a>
                <div className="rigthMenu">
                    {/*<a className="menuItems">ITEM</a>
                    <a className="menuItems">ITEM</a>
                    <a className="menuItems">ITEM</a>*/}
                    <Link href="#contacto">
                        <button className="contactItem">CONTÁCTO</button>
                    </Link>
                </div>
            </header>
        </Fragment>
    )
}
