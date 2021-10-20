import { Button } from 'rsuite';
import Head from 'next/head';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css';

const Track = () => {
    return (
        <>
            <Head>
                <title>Wykonawcy</title>
            </Head>
            <div>
                <h1>Utwory Wykonawców</h1>
                <div className={styles.text}><p> Utwory:  </p></div>
                <Button  href="/">Wróć na poprzednią stronę</Button>

            </div>
        </>

    );






}
export default Track;