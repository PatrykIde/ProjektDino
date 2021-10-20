import Head from 'next/head';
import { Button } from 'rsuite';

import Layout from '../components/layout';
import Navbar from '../components/navbar';
import  Artist  from '../list/list_base';
import Link from 'next/link';
import Albums from '../list/list_albums';


const Authors = () => {
    return (
        <>
            <Head>
            <h1>Wykonawcy</h1>
            </Head>

                < div > Lista wykonawców:</div>
            <Artist> </Artist>

                <Button href="/">Wróć na poprzednią stronę</Button>
           
        </>
    );

}
export default Authors;



