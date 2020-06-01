import Head from 'next/head'
import {Layout, Menu, Row, Col, Divider} from "antd";
import React, {Fragment} from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <Fragment>
            <Head>
                <link rel="icon" type="image/png" href="favicon.png"/>
                <title>Digital Alliance</title>
                <meta name="description"
                      content="Transformamos tu manera de pensar para impulsar tu empresa. Servicios en Marketing BPO & Desarrollo a la medida."/>
            </Head>
            <Header/>

            <div className="mainContent">
                <picture>
                    <source srcSet="/assets/workprogress-320w.png" media="(max-width: 320px)"/>
                    <source srcSet="/assets/workprogress-375w.png" media="(max-width: 375px)"/>
                    <source srcSet="/assets/workprogress-414w.png" media="(max-width: 414px)"/>
                    <img className="" src="/assets/workprogress.png" alt=""/>
                </picture>
            </div>
            <Footer/>
        </Fragment>
    )
}
