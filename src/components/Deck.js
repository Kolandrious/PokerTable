import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Card from './Card'

export default class Deck extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hand:[],
      newHand: [],
      ableToGetNew: false,
      autoGo: true,
    }
    this.addCards = this.addCards.bind(this)
  }

  addCards() {
    const { hand, newHand, ableToGetNew } = this.state;
    if (ableToGetNew) {
      this.setState({ ableToGetNew: false })
      for (let i = 0; i < newHand.length; i++) {
        setTimeout(() => {
          hand.push(newHand[i])
          this.setState({ hand })
        }, 200*i)
      }
      setTimeout(() => {
        this.props.completeAnimation()
      }, 1300)
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('Deck will receive props')
    if (this.state.hand !== nextProps.hand) {
      if (!this.props.animationIsGoing) {
        this.setState({ hand: [], newHand: nextProps.hand, ableToGetNew: false})
          setTimeout(() => {
            this.setState({ ableToGetNew: true })
            this.addCards()
          }, 300)
      }
    }
  }

  render() {
    const { hand } = this.state
    const cards = hand.map(card => <Card key={card} value={card} />)

    return (
      <div className="Deck" onClick={this.state.ableToGetNew ? (() => { this.addCards() }) : false}>
        <Card key={'Back'} value={'Back'} />
        <CSSTransitionGroup
          transitionName="card"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {cards}
        </CSSTransitionGroup>
      </div>
    )
  }
}

