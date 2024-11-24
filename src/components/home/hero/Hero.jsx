import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Поиск следующего дома ' subtitle='Найдите новые и популярные объекты недвижимости, расположенные в вашем городе.' />

          <form className='flex'>
            <div className='box'>
              <span>Город/Улица</span>
              <input type='text' placeholder='Локация' />
            </div>
            <div className='box'>
              <span>Тип жилья</span>
              <input type='text' placeholder='Тип жилья' />
            </div>
            <div className='box'>
              <span>Цена</span>
              <input type='text' placeholder='Цена' />
            </div>
            <div className='box'>
              <h4>Поиск</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
