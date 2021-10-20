import Link from 'next/link'
import 'rsuite/styles/index.less';
import Image from 'next/image';


const Navbar = () => {

    return (

        
        <nav>
            <div className="img_1">
                <Image src="/icona_1.png" width={180} height={120} />
            </div>
            
            <Link href="/"><a>Home</a></Link>
            <Link href="/authors"><a>Listowanie według wykonawcy</a></Link>
            <Link href="/albums"><a>Listowanie według albumów </a></Link>
            <Link href="/track"><a>Listowanie według utworów</a></Link>
            
            <div className="img_2">
                <Image src="/icona_2.png" width={180} height={120} />
            </div>
        </nav>
    );
}
export default Navbar;