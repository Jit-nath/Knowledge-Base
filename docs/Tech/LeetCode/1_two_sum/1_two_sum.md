---
sidebar_position: 1
---

# Problem

**Difficulty:** Easy  
**Topics:** Array, Hash Table  
**Hint:** Use a hash map for faster lookups.

---

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you **may not use the same element twice**.

You can return the answer in **any order**.

---

## Examples

### Example 1:

- **Input:** `nums = [2, 7, 11, 15]`, `target = 9`
- **Output:** `[0, 1]`
- **Explanation:** `nums[0] + nums[1] == 9`, so return `[0, 1]`.

### Example 2:

- **Input:** `nums = [3, 2, 4]`, `target = 6`
- **Output:** `[1, 2]`

### Example 3:

- **Input:** `nums = [3, 3]`, `target = 6`
- **Output:** `[0, 1]`

---

## Constraints

- `2 <= nums.length <= 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- `-10⁹ <= target <= 10⁹`
- Only one valid answer exists.
