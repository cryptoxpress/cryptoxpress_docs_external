import React from 'react';
import Footer from '@theme-original/Footer';
import { useLocation } from '@docusaurus/router';
import HomeFooter from "../../components/CustomFooter/index"

export default function FooterWrapper(props) {
    const {pathname} = useLocation();

    return(
        <>
            <HomeFooter/>
        </>
    )

}