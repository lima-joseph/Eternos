import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Estilos principais do Swiper
import 'swiper/css/navigation'; // Estilos de navegação
import 'swiper/css/pagination'; // Estilos de paginação
import './css/SwiperComponent.css'

import {Pagination } from 'swiper/modules'; // Importar dos módulos

import im1 from '../assets/imgs/600x400.svg';

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={30} // Espaço entre os slides
      slidesPerView={1} // Quantidade de slides visíveis ao mesmo tempo
      pagination={{ clickable: true }} // Habilitar a paginação
      modules={[Pagination]} // Passar os módulos explicitamente
    >
      <SwiperSlide>
        <div className="slide-content"><img className='img-fluid' src={im1} alt="Slide 1" /></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">Slide 4</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
