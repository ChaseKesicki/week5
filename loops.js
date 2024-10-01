let birds = ['Owl', 'Robin', 'Eagle']
 console.log(birds)

 
//consice, will see more often
 birds.forEach( function(bird   ){
    // repeats one for each object in array
    // function will be called for each object in the array
    console.log(index, bird.toUpperCase())
 })
//traditional for loop
 for ( let x = 0 ; x < birds.length ; x = x+1) {
    let bird = birds[x]
    console.log(x, bird)
 }