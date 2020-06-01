import Head from 'next/head'
import {Row, Col, Divider} from "antd";
import React, { Fragment } from "react";


export default function Home() {
    return (
        <Fragment>
            <footer className="footer-area" id="contacto">
                <div className="content">
                    <Row justify="center" style={{paddingTop: '50px'}}>
                        <Col span={12}>
                            <img className="footer-logo" src="/assets/da-logo-blanco.png" alt=""/>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col span={12} className="footer-text">
                            <p>digital.manger@adibemp.com</p>
                            <p>(300)7832539</p>
                            <a href="https://www.facebook.com/DigitalAlliance.ctg" style={{ marginRight: '20px' }}><img style={{width: '35px'}} src="/assets/fb.png" alt="facebook"/></a>
                            <a href="https://www.instagram.com/digital_alliance_ctg"><img style={{width: '38px'}} src="/assets/ig_logo.png" alt="facebook"/></a>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Divider />
                        <p>&copy;2020 Digital Alliance</p>
                    </Row>
                </div>
            </footer>
        </Fragment>
    )
}
