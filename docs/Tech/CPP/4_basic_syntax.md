---
sidebar_position: 4
---

# Basic Syntax

**Are you new to programming?**

It doesn't matter whether you're just starting out or have years of experience—there’s always something new to learn in this awesome language!

## **What is "Programming ✨"?**

Think of programming like teaching a dog to fetch a ball. First, you show the dog what the ball looks like, then reward it when it fetches the ball. Similarly, with programming, you tell the machine what to do, and it does it!

### **Do you have VSCode?**

If not, go ahead and install it. If you already have it, open VSCode in a folder, create a new file, name it however you want, and add the `.cpp` extension. Make sure you’re comfortable with VSCode, files, and folders before moving on.

For this example, I’ll name my file `main.cpp`. Now that your file is ready, let's write some code to make it do something.

Enter the following code:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, world!" << endl;
}
```

Next, open your terminal and run the following command depending on what you’re using:

- If you have Clang: `clang++ main.cpp`
- If you’re using MinGW or GCC: `g++ main.cpp`
- If you’re using the Visual Studio PowerShell prompt: `cl main.cpp`

Then run the compiled file with:

- `./main.exe` for Windows
- `./main.out` for Linux
- `./a.out` for macOS

You should see the following output:

```sh
Hello, world!
```

Notice the line `cout << "Hello, world!" << endl;` in the code? That’s what prints the output to the screen.

---

### Let's break it down

1. You make a file
2. You type `g++ main.cpp`
3. you type `./main.exe`

And the magic happens. But its not magic theres a process running in the backgound called compilation.

The `g++ main.cpp` actually converts the code into a machine redable code which actually runs in the computer and `./main.exe` runs the code.

So its a two step process :
1. Compile
2. Run

#### The Instructions

- `cout`- Its responsible for showing the *Hello world*
- `endl` - It prints the next line in a new line
- `int main()` - It tells the computer to start perform task from there 
- Ignore the rest now they will be covered in future.

