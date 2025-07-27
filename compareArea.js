let shape1 = {
    width: 100,
    height: 200,
  }
  
  let shape2 = {
    width: 30,
    height: 40,
  }
 
function calcArea(rect) {
    let area = rect.width * rect.height
    // console.log('calculating area:', rect.width, 'x', rect.height, '=', area)
    return area
}
  
// Function to compare two shapes and return the one with the larger area
function maxShape(shape1, shape2) {
    return calcArea(shape1) > calcArea(shape2) ? shape1 : shape2;
}

let biggerShape = maxShape(shape1, shape2)
console.log('shape 1:', shape1, 'and Area:', calcArea(shape1))
console.log('shape 2:', shape2, 'and Area:', calcArea(shape2))
//console.log(  '\n' + 'is bigger shape:', biggerShape)

if (biggerShape === shape1) {
    console.log('\nTherefore, the bigger shape is: shape 1');
} else {
    console.log('\nTherefore, the bigger shape is: shape 2');
}



