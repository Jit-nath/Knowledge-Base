---
sidebar_position: 4
---

# Basic Syntax

**Are you new to programming?**

Whether you're a beginner or an experienced developer, there's always something new to explore in C++!

## **What is "Programming"?**

Think of programming like teaching a dog to fetch a ball. First, you show the dog what the ball looks like, then reward it when it fetches the ball. Similarly, in programming, you give the computer instructions, and it follows them.

### **Setting Up VSCode**

If you don’t have VSCode, install it first. Then:

1. Open VSCode in a folder.
2. Create a new file with the `.cpp` extension (e.g., `main.cpp`).
3. Ensure you're comfortable navigating VSCode, files, and folders.

### Writing Your First Program

In `main.cpp`, add this code:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, world!" << endl;
}
```

### Running the Code

In your terminal, run one of these commands:

- **Clang:** `clang++ main.cpp`
- **MinGW/GCC:** `g++ main.cpp`
- **Visual Studio PowerShell:** `cl main.cpp`

Then execute the compiled file:

- `./main.exe` for Windows
- `./main.out` for Linux
- `./a.out` for macOS

**Output:**

```sh
Hello, world!
```

### Understanding the Code

- **`cout`** - Outputs text to the screen.
- **`endl`** - Moves the cursor to a new line.
- **`int main()`** - Marks the starting point of your program.

### Compilation Process

Running `g++ main.cpp` compiles the code into machine-readable instructions. Executing `./main.exe` runs that compiled file.

**Steps:**

1. **Compile**
2. **Run**

---

## Variables and Data Types

**Variables** are containers that hold data, like:

- Your **name** (text)
- Your **age** (number)
- Your **height** (decimal value)

### Why Different Data Types?

Using a single data type for everything wastes memory. For example, your **age** takes far less space than your **name**. Efficient data types help manage memory better.

### Memory Units: Bytes and Bits

- **1 bit** → Smallest unit of data, stores `0` or `1`.
- **1 byte** → Contains **8 bits**.

### Common Data Types in C++

#### **`bool`**

- Stores `true` or `false`.
- Requires **1 bit** (or **1 byte** for alignment).

```cpp
bool isReady = true;
bool isFinished = false;
```

#### **`char`**

- Stores a **single character**.
- Requires **1 byte**.

```cpp
char grade = 'A';
```

#### **`int`**

- Stores whole numbers.
- Requires **4 bytes**.

```cpp
int age = 20;
int temperature = -15;
```

**Range:** ~ −2 billion to +2 billion

#### **`unsigned int`**

- Stores **only positive** whole numbers.
- Requires **4 bytes**.

```cpp
unsigned int population = 123456;
```

**Range:** 0 to ~4 billion

#### **`short`**

- Stores smaller integer values.
- Requires **2 bytes**.

```cpp
short year = 2023;
```

**Range:** ~−32,768 to +32,767

#### **`long`**

- Stores larger integer values.
- Typically requires **8 bytes**.

```cpp
long distance = 123456789;
```

#### **`float`**

- Stores decimal values with limited precision.
- Requires **4 bytes**.

```cpp
float price = 99.99;
```

#### **`double`**

- Stores decimal values with **higher precision**.
- Requires **8 bytes**.

```cpp
double pi = 3.14159265;
```

#### **`long double`**

- Provides even greater precision.
- Requires **16 bytes** or more.

```cpp
long double preciseValue = 3.14159265358979323846;
```

### Arrays

An **array** stores multiple values of the same type under one variable name. For example:

```cpp
int scores[5] = {90, 85, 88, 92, 76};
```

**`string`** is essentially an implementation of a **character array**:

```cpp
string name = "Alice";
```

### Constants

A **constant** is a value that cannot be changed once set:

```cpp
const float PI = 3.1415;
```

Constants are useful for values that must remain fixed throughout your program.

---

## Operators in C++

Operators are symbols that perform operations on variables and values.

### Types of Operators

1. **Arithmetic Operators**

   - `+` (Addition)
   - `-` (Subtraction)
   - `*` (Multiplication)
   - `/` (Division)
   - `%` (Modulo - Remainder)
    
    Example:
   ```cpp
   int a = 5, b = 10, c;
   c = a + b;  // addition
   c = a / b;  // division
   // if c is int it can not store 5/10 or 0.5   
   // it will store whatever which is in front of the point which is 0
   // everything else get discarded
   ```

2. **Comparison Operators**

   - `==` (Equal to)
   - `!=` (Not equal to)
   - `>` (Greater than)
   - `<` (Less than)
   - `>=` (Greater than or equal to)
   - `<=` (Less than or equal to)

3. **Logical Operators**

   - `&&` (AND)
   - `||` (OR)
   - `!` (NOT)

4. **Assignment Operators**
   - `=` (Assign)
   - `+=` (Add and assign)
   - `-=` (Subtract and assign)
   - `*=` (Multiply and assign)
   - `/=` (Divide and assign)

> we will cover these in the next chapter

---
