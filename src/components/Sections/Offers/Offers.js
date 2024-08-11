import React from 'react';
import { Box, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import offer1 from '../../../assets/offer1.png';
import offer2 from '../../../assets/offer2.png';

const Offers = () => {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <Box 
              component="img" 
              src={offer1} 
              sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box 
              component="img" 
              src={offer2} 
              sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box 
              component="img" 
              src={offer1} 
              sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box 
              component="img" 
              src={offer2} 
              sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box 
              component="img" 
              src={offer1} 
              sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box 
              component="img" 
              src={offer2} 
              sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Offers;
