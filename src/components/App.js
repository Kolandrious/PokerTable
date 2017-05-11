import React, { Component } from 'react'
import Deck from './Deck'
import '../App.css'

const cards = [
  '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd', 'Ad',
  '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'Ts', 'Js', 'Qs', 'Ks', 'As',
  '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc', 'Ac',
  '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh', 'Ah',
];


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hand: [],
      rank: 0,
      animationIsGoing: false,
    }

    this.getRandomHand = this.getRandomHand.bind(this)
    this.getCards = this.getCards.bind(this)
  }

  getRandomHand() {
    const allCards = cards.concat()
    const hand = []
    for (let i = 0; i < 5; i++) {
      hand.push(allCards.splice((Math.floor(Math.random()*allCards.length) - 1), 1)[0])
    }
    return hand
  }

  getCards(combination) {
    this.setState({ hand: this.getRandomHand(), animationIsGoing: true })
  }

  render() {
    return (
      <div className="App">
        <button
          disabled={this.state.animationIsGoing}
          onClick={()=> { this.getCards()}}
        >
          get cards
        </button>
        <div>{this.state.hand}</div>
        <div>
          <Deck hand={this.state.hand} completeAnimation={() => {this.setState({ animationIsGoing: false })}} animationIsGoing={this.state.animationIsGoing} />
        </div>
      </div>
    );
  }
}


/*  получить юзера, баланс
    юзер устанавливает ставки, общается
    действия на раздаче:
      заблокировать кнопки
      убрать карты
      отправить на сервер данные о юзере, ставке, игре, балансе (чекнуть)
      получить карты
      показать карты
      показать выигрыш
      изменить баланс на новый, обнулить ставку
      разблокировать кнопки

*/
