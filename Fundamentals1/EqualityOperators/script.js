let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));


if (numNeighbours === 1){
    console.log('Only1border!');
}else if (numNeighbours > 1){
    console.log('More than one.');
} else{
    console.log('None');

}