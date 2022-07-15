const getNumbersThatAddsUp = (nums = [], target ) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] && nums.includes(target - nums[i])) {
            return [nums[i], target - nums[i]]
        }
    }
}

console.log(getNumbersThatAddsUp([2,7,11,15], 9))