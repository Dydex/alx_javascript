function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
        const sum = numbers.reduce((acc, num) => acc + num, 0); 

        
        const average = sum / numbers.length;

        return average

}

const numbers = [65, 84.62, 100, 65, 65, 100, 200, 130, 63.66, 130,130,130,130,65,100,100,0,0,0];
const avg = calculateAverage(numbers);
console.log(avg)