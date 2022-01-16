function carParkingRoof(cars, k) { 
    cars.sort((a, b) => {
        return a-b;
    });
    let length = cars.length;
    let min = cars[k-1] - cars[0] + 1;
    for (let i = 0; i < length - k + 1; i++) {
        let temp = cars[i+k-1] - cars[i];
        if (temp < min) {
            min = temp + 1
        }
    }
    return min;
} 
