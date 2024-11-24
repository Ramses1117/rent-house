import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>У вас есть вопросы?</h1>
              <p>Мы поможем вам в карьерном росте и развитии.</p>
            </div>
            <button className='btn5'>Связаться с нами</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Вам нужна помощь?</h2>
              <p>Получайте обновления, горячие предложения, учебники, скидки, отправленные прямо в ваш почтовый ящик каждый месяц</p>

              <div className='input flex'>
                <input type='text' placeholder='Email' />
                <button>Отправить</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  )
}

export default Footer
