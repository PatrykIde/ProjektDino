import { database } from '../components/base';
import styles from '../styles/Home.module.css';

import Link from 'next/link';

const Artist = () => {
    return (
        <div>
            {database.map((artist) => {
                return (
               

                    <div


                    > 
                        <p>{artist.name}</p>
                        <Link className={styles.text1} href={`/Artist/${encodeURIComponent(artist.name)}`}><a className={styles.text} >Przejdź do albumu wykonawcy {artist.name}</a></Link>
                        </div>

                );
            })}
           
        </div>
       
    );
};
export default Artist;

