import { render } from '@czechitas/render';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { OrderItem } from '../components/orderItem/orderItem';
import { Order } from '../components/order/order';
import '../global.css';
import './index.css';
import './order.css';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      < Header showMenu={false}/>

      <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>
          <p className="empty-order">Zatím nemáte nic objednáno</p>
          <div className="order__items">
            <div className="order-item">
              <img
                src="/cups/espresso.png"
                className="order-item__image"
              />
              <div className="order-item__name">
                Espresso
              </div>
            </div>

            <div className="order-item">
              <img
                src="/cups/doppio.png"
                className="order-item__image"
              />
              <div className="order-item__name">
                Doppio
              </div>
            </div>
          </div>
        </div>
      </main>


      <Footer/>

    </div>
  </div>
);
