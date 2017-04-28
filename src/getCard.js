export default str => {
  if (!str) {
    console.log('getCardFromString is empty')
    return ''
  }
  const deck = [
    ['🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪', '🂫', '🂭', '🂮', '🂡'], // spades
    ['🂲', '🂳', '🂴', '🂵', '🂶', '🂷', '🂸', '🂹', '🂺', '🂻', '🂽', '🂾', '🂱'], // hearts
    ['🃂', '🃃', '🃄', '🃅', '🃆', '🃇', '🃈', '🃉', '🃊', '🃋', '🃍', '🃎', '🃁'], // diamonds
    ['🃒', '🃓', '🃔', '🃕', '🃖', '🃗', '🃘', '🃙', '🃚', '🃛', '🃝', '🃞', '🃑']  // clubs
  ]
  let strength;
  let suit;
  switch (str.substr(0, 1)) {
    case 'A':
      strength = 12
      break
    case 'K':
      strength = 11
      break
    case 'Q':
      strength = 10
      break
    case 'J':
      strength = 9
      break
    case 'T':
      strength = 8
      break
    case '9':
      strength = 7
      break
    case '8':
      strength = 6
      break
    case '7':
      strength = 5
      break
    case '6':
      strength = 4
      break
    case '5':
      strength = 3
      break
    case '4':
      strength = 2
      break
    case '3':
      strength = 1
      break
    case '2':
      strength = 0
      break
    default:
      strength = 0
      break
  }
  switch (str.substr(1, 1)) {
    case 's':
      suit = 0
      break
    case 'h':
      suit = 1
      break
    case 'd':
      suit = 2
      break
    case 'c':
      suit = 3
      break
    default:
      break
  }
  return deck[suit][strength]
}
