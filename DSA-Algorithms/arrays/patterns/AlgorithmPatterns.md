# Algorithm Patterns

This folder contains common algorithmic patterns used to solve array and string problems efficiently.

Each pattern includes:
- When to use it
- Why it works
- Time and space complexity
- Example problems from this repository

The goal is to recognize patterns quickly and apply them consistently during problem solving and interviews.

---

## 1️⃣ Frequency Map / Hash Map

### Description
Uses a hash-based data structure (Object or Map) to count occurrences or track previously seen values.

### When to Use
- Counting frequency of elements
- Finding duplicates or repetitions
- Comparing collections (anagrams, equality checks)
- Finding the most or least frequent item

### Why It Works
Hash maps provide **O(1)** average lookup and insertion, allowing linear-time solutions.

### Time & Space
- **Time:** O(n)
- **Space:** O(n)

### Examples
- `arrays/mostFrequentString.js`
- `strings/firstRepeatingChar.js`

---

## 2️⃣ Hash Set / Complement Pattern

### Description
Uses a Set to track seen values and checks whether a required complement already exists.

### When to Use
- Two-sum style problems
- Checking if any two values satisfy a condition
- Avoiding nested loops

### Why It Works
Transforms an O(n²) brute-force solution into O(n) by trading space for speed.

### Time & Space
- **Time:** O(n)
- **Space:** O(n)

### Examples
- `arrays/twoSum.js`

---

## 3️⃣ Linear Scan

### Description
Iterates through the data structure once while maintaining minimal state.

### When to Use
- Ordered checks
- Early exits
- Simple validations

### Time & Space
- **Time:** O(n)
- **Space:** O(1)

### Examples
- `arrays/isSortedArray.js`
- `arrays/secondFoundItem.js`

---

## Notes
- Patterns are **tools**, not categories — the same pattern may apply to arrays, strings, or other inputs.
- Problems are organized by **input type**, while patterns describe the **technique used**.
- Recognizing patterns early reduces cognitive load during interviews! ;D

