import '../styles/globals.css'
import '../styles/w3.css'
import Head from 'next/head'
import {AuthProvider} from "../contexts/AuthContext";

function MyApp({ Component, pageProps}) {
    return (
        <AuthProvider>
            <Head>
                <title>Cascata</title>
            </Head>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp
