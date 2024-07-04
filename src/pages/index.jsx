import { render } from '@czechitas/render';
import { Header } from '../components/header/header';
import { Banner } from '../components/banner/banner';
import { Menu } from '../components/menu/menu';
import { Gallery } from '../components/gallery/gallery';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';
import '../global.css';
import './index.css';

const response = await fetch('http://localhost:4000/api/drinks');
const coffeeData = await response.json();

const coffees = coffeeData.data;

console.log(response)
console.log(coffees)

const orderBtn = document.querySelectorAll(".order-btn")
orderBtn.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
  const drinkId = e.target.dataset.id
  console.log(drinkId)

  await fetch(`/api/drinks/${drinkId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'hanapavlova'
    },
    body: JSON.stringify([{
      op: 'replace',
      path: '/ordered',
      value: true,
    }])
    }
  )
})
})

document.querySelector('#root').innerHTML = render(
  <div className="page">
    < Header showMenu={true} />
    <main>
      < Banner />
      < Menu 
      drinks={coffees}
      />
      < Gallery />
      < Contact />
    </main>
    < Footer />
  </div>
);

const NavButton = document.querySelector(".nav-btn")
const Rollout = document.querySelector(".rollout-nav")

NavButton.addEventListener('click', () => {
  Rollout.classList.toggle("nav-closed")
})

Rollout.addEventListener('click',() => {
  Rollout.classList.toggle("nav-closed")
})