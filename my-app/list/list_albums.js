import { database } from '../components/base';


import Link from 'next/link';

const Albums = () => {
  
    return (
        <div>
            {database.map((artist) => {
                return (

                    <div

                    >
                        <p>{artist.album.name}</p>

                       
                    </div>

                );
            })}
        </div>
    );
};
export default Albums;

