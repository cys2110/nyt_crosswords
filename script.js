const body = document.querySelector('p')

const validScrabbleWord = async() => {
    const response = await fetch("/2002/06/23.json")
    const list = await response.json()
    const answers = list.answers.across
    const clues = list.clues.across
    const combined = answers.map((answer, clue) => ({[answer]: clues[clue]}))
    const stringed = JSON.stringify(combined, false, 4)
    body.innerText += stringed
    const downAnswers = list.answers.down
    const downClues = list.clues.down
    const downCombined = downAnswers.map((answer, clue) => ({[answer]: downClues[clue]}))
    const downStringed = JSON.stringify(downCombined, false, 1)
    body.innerText += downStringed
  }

validScrabbleWord()