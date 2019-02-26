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

 ## MY FIRST I/O! (Exercise 3 of 13)

  Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument (i.e., process.argv[2]). You do not need to make
  your own test file.

