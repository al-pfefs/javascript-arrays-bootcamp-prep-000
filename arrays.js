var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) {
  return [element, ...array]
}

function destructivelyAddElementToEndOfArray(array,element) {
  array = [element, ...array]
  return array
}
