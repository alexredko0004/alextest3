let fuel; //'diesel'; //'diesel'
let carSize; //S, M, L, XL

// // function gasStation (carSize) {
//       if (carSize==='S'||carSize==='M') {
//         console.log ('Fueling '+carSize+' auto with gas')
//       }
//       else if (carSize==='L'||carSize==='XL'){
//         console.log ('Fueling '+carSize+' auto with diesel')
//       }
//       else {
//         console.log ('Please provide a valid car size')
//       }
// }

// gasStation ('S');

function gasoline (fuel,carSize) {
    if (fuel === undefined&&carSize === undefined) {
        console.log ('Filling up the tank of XL car with diesel fuel type (default message)'); //Wanted to add some descriptive message here, but requirements are saying to have this output
}
    else if (fuel !== 'gas'&&fuel!=='diesel') {
        console.log ('Please provide a valid fuel type');
}
    else if (carSize !== 'S'&&carSize!=='M'&&carSize!=='L'&&carSize!=='XL') {
    console.log ('Please provide a valid car size');
}
else {console.log ('Filling up the tank of '+carSize+' car with '+fuel+' fuel type');
}
}


gasoline ('gas','S');
gasoline ('gas','M');
gasoline ('gas','L');
gasoline ('gas','XL');
gasoline ('diesel','S');
gasoline ('diesel','M');
gasoline ('diesel','L');
gasoline ('diesel','XL');
gasoline ();
gasoline ('gas');