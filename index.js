
getComputerChoice = () => {
    const arr = ['Rock', 'Paper', 'Scissors'];

    let computerChoice = arr[Math.floor(Math.random()*arr.length)];
    console.log(computerChoice);

    return computerChoice;
}