import "./about.css";
import certif from '../../img/certif-front.png';

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img className="a-img" src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img-dev" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">Acerca de mí</h1>
            <p className="a-sub">Inicie mi camino en el mundo IT de manera autodidacta, pero durante el 2022 hice el curso de Desarrollo Web Full Stack en la plataforma Nucba. Gracias a todo lo aprendido en este tiempo, puedo maquetar y dar estilos para sitios web y crear diseños totalmente adaptables a diferentes pantallas, además de que sean dinámicas por medio de la manipulación del contenido usando Javascript.
            </p>
            <p className="a-desc">Partiendo desde las bases de Html, Css y Javascript, que son esenciales en el desarrollo front-end, busco ir mejorando mis habilidades con la realización de cada proyecto, y brindando a cada usuario páginas atractivas y funcionales que le permitan una buena experiencia.
            </p>
            <div className="a-award">
                <img className="a-award-img" src={certif} alt="foto-certificado" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">Desarrollo Web Front End | NUCBA</h4>
                    <p className="a-award-desc">Curso Desarrollo Web Front End - 2022</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About