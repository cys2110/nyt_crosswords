const body = document.querySelector('p')

const validScrabbleWord = async() => {
    const response = await fetch("/1977/06/09.json")
    const list = await response.json()
    const answers = list.answers.across
    const clues = list.clues.across
    const combined = answers.map((answer, clue) => ({[answer]: clues[clue]}))
    const stringed = JSON.stringify(combined)
    body.innerHTML += stringed
    const downAnswers = list.answers.down
    const downClues = list.clues.down
    const downCombined = downAnswers.map((answer, clue) => ({[answer]: downClues[clue]}))
    const downStringed = JSON.stringify(downCombined)
    body.innerHTML += downStringed
  }

validScrabbleWord()