---
sidebar_position: 2
---

# Solution

### Approach 1: Brute Force

**Algorithm:**  
Loop through each element `x` and find if there exists another value that equals `target - x`.

**Complexity:**

- **Time Complexity:** O(n²)
- For each element, we try to find its complement by looping through the rest of the array, which takes O(n) time. Therefore, the overall time complexity is O(n²).

- **Space Complexity:** O(1)
- The space required does not depend on the size of the input array, so only constant space is used.

---

### Approach 2: Two-pass Hash Table

**Intuition:**  
To improve our runtime complexity, we need a more efficient way to check if the complement exists in the array. Using a hash table allows us to reduce lookup time from O(n) to O(1).

**Algorithm:**

1. In the first pass, store each element’s value as a key and its index as the value in a hash table.
2. In the second pass, for each element, check if `target - nums[i]` exists in the hash table.

**Complexity:**

- **Time Complexity:** O(n)
- We traverse the list containing `n` elements exactly twice, and each lookup in the hash table takes O(1) time.

- **Space Complexity:** O(n)
- The extra space required depends on the number of items stored in the hash table, which stores exactly `n` elements.

---

### Approach 3: One-pass Hash Table

**Algorithm:**  
While iterating through the array and inserting elements into the hash table, check if the current element’s complement already exists in the hash table. If it exists, return the indices immediately.

**Complexity:**

- **Time Complexity:** O(n)
- We traverse the list containing `n` elements only once. Each lookup in the table costs O(1) time.

- **Space Complexity:** O(n)
- The extra space required depends on the number of items stored in the hash table, which stores at most `n` elements.
