export const SET_GUESS = "SET_GUESS";

export const setGuess = (num) => {
  return {
    type: SET_GUESS,
    num
  }
}

export const SET_TOGGLE = "SET_TOGGLE";

export const setToggle = () => {
  return {
    type: SET_TOGGLE
  }
}

export const NEW_GAME = "NEW_GAME";

export const newGame = () => {
  return {
    type: NEW_GAME
  }
}