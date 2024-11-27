/**
 * Returns the indices of two numbers in the given array that add up to the target value.
 *
 * @param {number[]} nums - The input array of numbers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array containing the indices of the two numbers that add up to the target value. Returns [-1, -1] if no such pair is found.
 */
function twoSum(nums: number[], target: number): number[] {
  // Create a Map to store the numbers we've seen so far and their indices
  const map = new Map();

  // Iterate over the input array
  for (let i = 0; i < nums.length; i++) {
    // Check if the difference between the target value and the current number exists in the map
    if (map.has(target - nums[i])) {
      // If it does, return the indices of the matching numbers
      return [map.get(target - nums[i]), i];
    }
    // Otherwise, add the current number to the map with its index
    map.set(nums[i], i);
  }

  // If we've reached this point, no pair was found that adds up to the target value, so return [-1, -1]
  return [-1, -1];
}
