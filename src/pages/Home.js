import React from 'react';
import './css/homeStyles.css'
import { Icon } from '../components/Icons';
import Swiper from '../components/SwiperComponent';
import placeholder from '../assets/imgs/600x400.svg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <section className="section gradient-banner fw-medium">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 order-2 order-md-1 text-center text-md-left">
                    <h1 className="font-weight-bold mb-4">Venha caminhar rumo a saga Eterna conosco!</h1>
                    <p className="text-white mb-5">
                        Besides its beautiful design. Laapp is an incredibly rich core framework for you to
                        showcase your App.</p>
                    <Link to="seja-eterno" className="btn btn-secondary">Junte-se a Nós</Link>
                </div>
                <div className="col-md-6 text-center order-1 order-md-2">
                    <img
                    src='https://cdn.dooca.store/974/files/acutis-3.png?v=1627666930&webp=0'
                    className='img-fluid'
                    style={{maxHeight:'420px'}}
                    />
                </div>
            </div>
        </div>
    </section>
    <section className="section pt-0 position-relative pull-top ">
        <div className="container">
            <div className="rounded shadow p-5 bg-white">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
                    <Icon iconName="People" className="text-secondary fs-1"/>
                        <h3 className="mt-4 text-capitalize h5 ">Crescendo em Comunidade</h3>
                        <p className="regular text-muted">
                            Juntos, buscamos crescer na fé, no amor ao próximo e na comunhão com Deus. 
                            Aqui, somos uma família que caminha lado a lado.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
                        <Icon iconName="PersonArmsUp" className="fs-1"/>
                        <h3 className="mt-4 text-capitalize h5 ">Espiritualidade Viva</h3>
                        <p className="regular text-muted">
                            Vivemos a alegria de ser jovens na presença de Deus. Participe conosco de momentos de 
                            oração, louvor e reflexão que transformam vidas.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-12 mt-5 mt-lg-0 text-center">
                        <Icon iconName="GlobeAmericas" className="fs-1" />
                        <h3 className="mt-4 text-capitalize h5 ">Impactando o Mundo</h3>
                        <p className="regular text-muted">
                            Nosso chamado é fazer a diferença! Seja em ações solidárias, eventos ou partilhas, 
                            buscamos levar a mensagem de amor e esperança de Cristo a todos.
                        </p>
                        <p />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='section pt-5 bg-custom'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 text-center'>
                    <Swiper />
                </div>
                <div className='col-md-6'>
                    <h1 className='pt-2'>Lorem ipsum dolor sit amet</h1>
                    <p className='regular text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <p className='pt-2'>
                        <a href='#' className='btn btn-primary fw-medium'>Lorem Ipsum</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className='section pt-5 bg-custom'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='pt-2'>Lorem ipsum dolor sit amet</h1>
                    <p className='regular text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
                <div className='col-md-6 text-center'>
                    <img className='img-fluid' src={placeholder}/>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Home;
