import './notMatch.css';
import errorBg from './erorrBg/24.png'
import { useNavigate } from 'react-router-dom';
function NotMatch() {
    const navigate = useNavigate();
    const nav = () => {
        navigate("/");
    }
    return ( 
        <>
            <div className="container">
            <div className="row not_match">
                <div className="col-lg-6 col-md-12">
                <div className="my-5 text-light">
                <h1>I have bad news for you</h1>
                <p>The Page you are looking for might be removed or is tempararity unavaiable</p>
                </div>
                <button onClick={nav} type="button" className='btn'>Go To Home</button>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img src={errorBg} alt="" />
                </div>
            </div>
            </div>
        </>
     );
}

export default NotMatch;