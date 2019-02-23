var process_argv = process.argv;
['2', '4', '5', '1']

const sumArr = (array) => {
    return array.reduce((prev, item) => {
        return prev + Number(item)
    }, 0);
}

console.log(sumArr(process_argv.slice(2, process_argv.length)));