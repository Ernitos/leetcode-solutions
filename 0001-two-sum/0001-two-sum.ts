function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }

        numMap.set(currentNum, i);
    }

    return [];
}