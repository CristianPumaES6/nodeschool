 ## BABY STEPS (Exercise 2 of 13)

  Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console (stdout).

'''
var process_argv = process.argv;
['2', '4', '5', '1']

const sumArr = (array) => {
    return array.reduce((prev, item) => {
        return prev + Number(item)
    }, 0);
}

console.log(sumArr(process_argv.slice(2, process_argv.length)));
'''

