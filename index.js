// Code your solution in this file!
const scuberHqBlock = 42;
const blockLength = 264;

function distanceFromHqInBlocks( blocks ) {
    return Math.abs( blocks - scuberHqBlock );
}

function distanceFromHqInFeet( blocks ) {
    return distanceFromHqInBlocks( blocks ) * blockLength;
}

function distanceTravelledInFeet( start, destination ) {
    if ( start<destination ) {
        return ( (destination-start) * blockLength );
    } else {
        return ( ( start-destination ) * blockLength );
    }
}

function calculatesFarePrice( start, destination ) {
    const distance = distanceTravelledInFeet( start, destination );
    if ( distance <= 400 ) { 
       return 0;
    } else if ( distance >= 400 && distance <=2000 ) {
       return 0.02 * ( distance - 400 )
    } else if ( distance > 2000 && distance < 2500 ) {
       return 25;
    } else {
        return 'cannot travel that far';
    }
  }