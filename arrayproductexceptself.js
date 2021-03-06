//Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].



let input = [1, 2, 3, 4];
let output = [];
let right = [];
let left = [];
left[0] = 1;
const limit = input.length;
right[limit - 1] = 1;
for (let i = 1; i < limit; i++) {
    left[i] = left[i - 1] * input[i - 1];
}

for (let i = limit - 2; i > -1; i--) {
    right[i] = right[i + 1] * input[i + 1];
}


for (let i = 0; i < input.length; i++) {
    output[i] = left[i] * right[i];
}

console.log(output);
