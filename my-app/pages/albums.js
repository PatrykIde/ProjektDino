import Head from 'next/head';
import { Button } from 'rsuite';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import  Albums  from '../list/list_albums';
import Link from 'next/link';

const Album = () => {
    return (
        <>
        <Head>
        <title>Albumy wykonawców</title>
        </Head>
        
        <h1>Albumy wykonawców</h1>
    
                <Albums></Albums>



            <Button  href="/">Wróć na poprzednią stronę</Button>
      
        </>
    );







}
export default Album;