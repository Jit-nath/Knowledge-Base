---
sidebar_position: 6
---

# Functions

This is the most important concept in Computer Science. Your understanding in coding depends on your understanding of functions.

## What is a Function?

A function is a reusable block of code that performs a specific task, which you can call multiple times throughout your program. It helps in organizing code, improving readability, and reducing redundancy.

### Without Functions

Suppose I have code that repeatedly calculates the average of two numbers:

```cpp
int a, b, c;
cin >> a >> b;
c = (a + b)/2;
cout << c;
cin >> a >> b;
c = (a + b)/2;
cout << c;
cin >> a >> b;
c = (a + b)/2;
cout << c;
cin >> a >> b;
c = (a + b)/2;
cout << c;
```

I used this formula 4 times in my code without realizing I could write it just once and reuse it.

### With Functions

```cpp
int myFormula(int a, int b){
    return (a + b)/2;
}

int main() {
    cout << myFormula(1, 2) << endl; // Outputs 1
    cout << myFormula(2, 2) << endl; // Outputs 2
    cout << myFormula(4, 7) << endl; // Outputs 5
    return 0;
}
```

Functions make code reusable. Even though using functions might feel unnecessary in small programs, they are essential in large projects where code maintainability is crucial.

## Function Declaration and Definition

### Basic Syntax

```cpp
return_type function_name(parameter_list) {
    // function body
    return value; // optional, depends on return_type
}
```

### Examples of Different Return Types

```cpp
void functionName(int parameter1, float parameter2, ...) {
    // do something with the parameters
    // no return statement needed
}

int anotherFunction(int parameter1, char parameter2, ...) {
    // do something
    return something;   // an int value
}

bool lastOne(double parameter1, string parameter2, ...) {
    // do something
    return something;   // true or false
}

int main() {
    int a;
    bool b;
    functionName(1, 2.5);          // No value returned
    a = anotherFunction(1, 'A');   // Returns an integer
    b = lastOne(3.14, "hello");    // Returns a boolean
    return 0;
}
```

Notice that `functionName(parameter1, parameter2, ...)` doesn't need a variable to store its result, unlike the others. This is because it doesn't return a value.

> _void functions don't return any value_  
> This concept can be challenging for beginners to grasp.

---

## Function Parameters and Arguments

| **Term**       | **Description**                                             |
| -------------- | ----------------------------------------------------------- |
| **Parameters** | Variables listed in the function declaration or definition. |
| **Arguments**  | Actual values passed to the function when it is called.     |

### Parameter Passing Methods

### 1. Pass by Value

        In this method we input a copy of our variable to the function so whatever it does in its body doesn't change the actual value.
    ```cpp
    void increment(int x) {
        x++; // Changes only the local copy
    }

    int main() {
        int a = 5;
        increment(a);
        cout << a << endl; // Still outputs 5
        return 0;
    }
    ```
    Here variable a doesn't change its value. I am just passing a value 5 to the function, and any changes happen only to the local copy inside the function.

### 2. Pass by Reference

    In this method we are giving the address of the value, basically full control of the value so the actual value can change based on the logic of the function.
    ```cpp
    void increment(int &x) {
        x++; // Changes the original variable
    }

    int main() {
        int a = 5;
        increment(a);
        cout << a << endl; // Outputs 6
        return 0;
    }
    ```
    Notice after function the value will change to 6 because it changed the value at its address.

> Note: Address means physical memory location of the variable

> Advantage: Pass by reference is more efficient for large objects as it avoids copying data

### 3. Pass by Pointer

In this method we pass a pointer (which stores the address of the value), same thing like previous but with an extra step for accessing the value.

> Note: It may feel pointless for beginners but it has important use cases, especially when working with dynamic memory

```cpp
void increment(int *x) {
    (*x)++; // Changes the value at the pointer's address
}

int main() {
    int a = 5;
    increment(&a);
    cout << a << endl; // Outputs 6
    return 0;
}
```

    Difference from reference: Pointers can be reassigned and can be NULL, making them more flexible but requiring more careful handling

### When to use each method:

**Pass by Value**: When you need to work with a copy and don't want to modify the original  
**Pass by Reference**: When you need to modify the original variable or avoid copying large objects  
**Pass by Pointer**: When dealing with dynamic memory, optional parameters (nullptr), or arrays

## Function Overloading

C++ allows multiple functions with the same name but different parameter lists:

```cpp
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

int main() {
    cout << add(5, 3) << endl;       // Calls int version
    cout << add(3.5, 2.5) << endl;   // Calls double version
    cout << add(1, 2, 3) << endl;    // Calls three-parameter version
    return 0;
}
```

The compiler determines which function to call based on the argument types and count.

## Default Parameters

You can assign default values to parameters that will be used if no argument is provided:

```cpp
void printMessage(string message, int times = 1) {
    for(int i = 0; i < times; i++) {
        cout << message << endl;
    }
}

int main() {
    printMessage("Hello");           // Prints once
    printMessage("Hello again", 3);  // Prints three times
    return 0;
}
```

Default parameters must be rightmost in the parameter list.

## Inline Functions

Inline functions suggest the compiler to insert the function's code directly at the call site instead of performing a function call:

```cpp
inline int square(int x) {
    return x * x;
}

int main() {
    int result = square(5); // May be compiled as: int result = 5 * 5;
    cout << result << endl;
    return 0;
}
```

Inline functions can improve performance for small, frequently called functions by eliminating function call overhead.

## Recursion

A function can call itself, which is known as recursion:

```cpp
int factorial(int n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    // Recursive case
    else {
        return n * factorial(n-1);
    }
}

int main() {
    cout << factorial(5) << endl; // Outputs 120 (5*4*3*2*1)
    return 0;
}
```

Every recursive function needs a base case to prevent infinite recursion.

## Function Prototypes

Function prototypes declare a function before its full definition:

```cpp
// Function prototype
int calculateSum(int a, int b);

int main() {
    int result = calculateSum(5, 3);
    cout << result << endl;
    return 0;
}

// Function definition
int calculateSum(int a, int b) {
    return a + b;
}
```

This allows you to use functions before they're fully defined, which is especially useful in larger programs.

## Advanced Function Concepts

### Function Pointers

```cpp
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }

int main() {
    int (*operation)(int, int); // Function pointer declaration

    operation = add;
    cout << operation(5, 3) << endl; // Outputs 8

    operation = subtract;
    cout << operation(5, 3) << endl; // Outputs 2

    return 0;
}
```

### Lambda Functions (C++11 and later)

```cpp
int main() {
    // A simple lambda function
    auto square = [](int x) { return x * x; };

    cout << square(5) << endl; // Outputs 25

    // Lambda with capture clause
    int multiplier = 3;
    auto multiply = [multiplier](int x) { return x * multiplier; };

    cout << multiply(5) << endl; // Outputs 15

    return 0;
}
```

## Best Practices

1. **Keep functions focused**: Each function should perform one specific task
2. **Limit side effects**: Functions should ideally avoid changing global state
3. **Use meaningful names**: Name functions based on what they do
4. **Document complex functions**: Add comments explaining the purpose and usage
5. **Validate inputs**: Check function parameters for valid values
6. **Return error codes or use exceptions**: Handle error cases appropriately
7. **Limit function size**: If a function gets too long, consider breaking it down

Functions are the building blocks of well-organized code. Mastering them will significantly improve your programming skills and the quality of your software.
