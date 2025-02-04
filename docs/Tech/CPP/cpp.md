---
sidebar_position: 1
---

# Getting Started with c++

## Introduction

C++ is a powerful general-purpose programming language that supports various programming paradigms, including procedural, object-oriented, and generic programming. It is widely used for system/software development and game programming.

## Installation

To start using C++, you need to install a C++ compiler. Some popular options include:

- GCC (GNU Compiler Collection)
- Clang
- Microsoft Visual C++ (MSVC)

### Installing GCC on Windows

1. Download and install [MinGW](http://www.mingw.org/).
2. Add the `bin` directory of MinGW to your system's PATH environment variable.

### Installing GCC on macOS

1. Install Xcode from the App Store.
2. Open Terminal and run `xcode-select --install`.

### Installing GCC on Linux

1. Open Terminal.
2. Run `sudo apt-get install build-essential` (for Debian-based distributions) or `sudo yum groupinstall 'Development Tools'` (for Red Hat-based distributions).

## Writing Your First Program

Create a new file called `main.cpp` and add the following code:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

## Compiling and Running Your Program

To compile and run your C++ program, follow these steps:

1. Open Terminal or Command Prompt.
2. Navigate to the directory containing `main.cpp`.
3. Run the following command to compile your program:

   ```sh
   g++ main.cpp -o main
   ```

4. Run the compiled program:

   ```sh
   ./main
   ```

Congratulations! You've just written, compiled, and run your first C++ program.
