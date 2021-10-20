import { Button } from 'rsuite';
import Footer from '../components/footer';
//import 'rsuite/styles/index.less';
import Navbar from './navbar';


const Layout = ({ children }) => {
    return (
        <div className="content">
        
            <div  >Platforma z dyskografią muzyczną</div>
            <br></br>
            <Navbar />
            <div><title>Platforma z dyskografią muzyczną</title></div>
            <div>{children}</div>
            <Footer></Footer>
        </div>

    )
};



//Footer on Pages

export default Layout;