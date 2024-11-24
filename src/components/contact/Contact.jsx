import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Свяжитесь с нами' title='Получите помощь и дружескую поддержку' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Заполните форму</h4> <br />
            <div>
              <input type='text' placeholder='Имя' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Тема' />
            <textarea cols='30' rows='10'></textarea>
            <button>Отправить</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
