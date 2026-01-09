# Day 3: Functions, Modules, and Control Flow in Node.js

This session covers JavaScript fundamentals in Node.js including function creation, module exports/imports, and basic control structures.

---

## 📚 Topics Covered

1. **Functions** - Creating and calling functions
2. **Modules** - Exporting and importing custom modules
3. **Control Flow** - If-else statements and loops

---

## 1️⃣ Functions in Node.js

Functions are reusable blocks of code that perform specific tasks.

### Example: [n1.js](n1.js)

````javascript
// Creation of Function and display its output to Console

function sum(no1, no2) {
    return (no1 + no2);
}

console.log(sum(10, 20)); // Output: 30