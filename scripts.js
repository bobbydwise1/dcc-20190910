/*
This problem was asked by Facebook.

Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.

For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would return true, since we can split it up into {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.

Given the multiset {15, 5, 20, 10, 35}, it would return false, since we can't split it up into two subsets that add up to the same sum.
*/

const sorter = (yourArray) => {
  let copied = yourArray.slice()
  return copied.sort(function(a,b){return a-b})
}

const splitSummer = (yourArray) => {
  let sum1 = 0;
  for ( i = 0; i < yourArray.length ; i++ ) {
    sum1 = sum1 + yourArray[i]
  }
  let goal = sum1/2
  sum1 = 0;
  for ( i = 0; i < yourArray.length ; i++ ) {
    sum1 = sum1 + yourArray[i]
    if (sum1 == goal) {break}
  }
  let output1 = yourArray.slice(0,i+1)
  let output2 = yourArray.slice(-(yourArray.length-i-1))
  let sum2 = 0;
  for ( i = 0; i < output2.length ; i++ ) {
    sum2 = sum2 + output2[i]
  }
  console.log('output1 = ', output1)
  console.log('output2 = ', output2)
  if (sum1 == sum2) {return true}
  return false
}

let test0 = [15, 5, 20, 10, 35, 15, 10]
console.log(splitSummer(sorter(test0)))

$(document).ready(function() {

  $('#form1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    input1 = input1.replace(/\'/g,'"')
    input1 = JSON.parse(input1)
    console.log(input1)
    $('#output-1').text(JSON.stringify(splitSummer(sorter(input1))))
  })

});
