var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) {
  return [element, ...array]
}

function destructivelyAddElementToEndOfArray(array,element) {
 array = array
 array[1] = element
 return array
}
