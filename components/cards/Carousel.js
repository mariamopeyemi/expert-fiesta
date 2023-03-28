import React, { useState } from 'react';

const MyComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const components = [
    {
        backgroundImage: "url('/img/event-cre-maxi.svg')",
         title:'Event Creation',
         details:'Our team of creative experts is dedicated to creating unique and impactful events that leave a lasting impression. From conceptualization to execution, we work closely with our clients or partners to bring their ideas to life and create unforgettable experiences.'
     },
     {
        backgroundImage: "url('/img/event-mgt-maxi.svg')",
         title:'Event Management',
         details:'Our team of creative experts is dedicated to creating unique and impactful events that leave a lasting impression. From conceptualization to execution, we work closely with our clients or partners to bring their ideas to life and create unforgettable experiences.'
     },
     {
        backgroundImage: "url('/img/event-plan-maxi.svg')",
         title:'Event Planning',
         details:'Our team of creative experts is dedicated to creating unique and impactful events that leave a lasting impression. From conceptualization to execution, we work closely with our clients or partners to bring their ideas to life and create unforgettable experiences.'
     },
 ];

  return (
    <div style={{ position: 'relative' }}>
      <div 
      style={{ display: 'flex', width: '100%' }}
      >
        {components.map((component, index) => (
          <div
            key={index}
            style={{
              backgroundImage: component.backgroundImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '60px',
              // width: `${index === activeIndex ? '60%' : '20%'}`,
              width: { md: `${index === activeIndex ? '60%' : '20%'}`, xs: '100%' },
              height: '500px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              margin: '0 5px',
              position: 'relative'
            }}
            onMouseOver={() => setActiveIndex(index)}
            onClick={() => handleClick(index)}
          >
            {index === activeIndex && (
            <div className=' p-[3rem] md:p-[6rem] md:py-[10rem] justify-center flex flex-col gap-[0.5rem]'>
                <p 
                  data-aos="flip-left"
                  data-aos-duration="1500"
                  className='sub_display_3plain text-left'>{component.title}</p>
                <p 
                   data-aos="zoom-in"
                   data-aos-duration="1500"
                  className='sub_display_2 text-left'>{component.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {components.map((component, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index === activeIndex ? '#AB3500' : 'white',
              borderRadius: index === activeIndex ? '8px' : '50%',
              width: index === activeIndex ? '30px' : '10px',
              height: '10px',
              margin: '0 5px',
              cursor: 'pointer',
              transition: 'transition-all',
            }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;