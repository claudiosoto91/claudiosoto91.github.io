import './intro.css';
import video from '../../img/dev-video.mp4';
import { TbMouse2 } from "react-icons/tb";
const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hola, soy</h2>
                <h2 className='i-name'>Claudio Soto</h2>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Desarrollador Web</div>
                        <div className="i-title-item">ReactJS | JavaScript</div>
                        <div className="i-title-item">HTML | CSS </div>
                    </div>
                </div>
                <div className="i-desc">
                    Desarrollador Web Front End | REACT | JS | NODE | EXPRESS | CSS | HTML 
                </div>
            </div>
            <TbMouse2/>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <div className="i-video">
                <div className="container-video">
                    <video autoplay="true" muted="true" loop="true"  src={video}></video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro