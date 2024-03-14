import React, {useState} from 'react'
import videoBg from '../../assets/videos/login_bg.mov'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginModal from './LoginModal';

const Login = () => {
  const [modalShow, setModalShow] = useState(false);
    
  return (
    <div className='login'>
        <video src={videoBg} autoPlay loop muted className='video'/>
        <div className="content">
            <h1 className='login_title '>Jorie Healthcare</h1>
            <p className='login_subtitle'>Revolutionizing Healthcare and Finance with Advanced Technology</p>
            <Button variant="outline-light" className='login_btn' onClick={() => setModalShow(true)}>Login</Button>
            <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    </div>
  )
}

export default Login