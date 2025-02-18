---
sidebar_position: 3
---

# Installation

Depending on the compiler and OS, the installation process differs for each item.

## GCC

### Overview
GCC (GNU Compiler Collection) is a widely used compiler for C and C++. It is the default compiler for Unix-based systems and supports the latest C++ standards. On Windows, GCC can be installed via MinGW-w64 or other distributions like MSYS2.

### On Windows
GCC is not natively available on Windows, but it can be installed using MinGW-w64.

#### Installation Steps:
1. **Download** → [MinGW-w64](https://www.mingw-w64.org/downloads/) (recommended for better support and updates)
2. **Add to Path**
   - Install MinGW-w64 following the instructions on their website.
   - Locate the installation folder, typically `C:\Program Files\mingw-w64\bin`.
   - Copy the full path.
   - Press `Win + R`, type `sysdm.cpl`, and press Enter.
   - Navigate to the `Advanced` tab and click `Environment Variables`.
   - Under `System Variables`, find `Path`, click `Edit`, then `New`, and paste the copied path.
   - Click `OK` to save and exit.

#### Verification:
Open a terminal (Command Prompt or PowerShell) and type:
```sh
gcc --version
```
Expected output (version may vary):
```
gcc (MinGW-w64) 11.2.0
Copyright (C) Free Software Foundation, Inc.
```

### On Linux
Most Linux distributions come with GCC pre-installed, and it supports the latest C++ standards.

For Ubuntu, Debian, and similar distributions:
```sh
sudo apt update && sudo apt install gcc
```

For Fedora:
```sh
sudo dnf install gcc
```

For Arch Linux:
```sh
sudo pacman -S gcc
```

#### Verification:
Type in the terminal:
```sh
gcc --version
```
Expected output (version may vary):
```
gcc (GCC) 13.2.1
Copyright (C) Free Software Foundation, Inc.
```

### On macOS
macOS uses Clang as the default compiler, but GCC can be installed via Homebrew.

#### Installation Steps:
1. **Install Homebrew** (if not installed):
   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. **Install GCC**:
   ```sh
   brew install gcc
   ```

#### Verification:
Type in the terminal:
```sh
gcc --version
```
Expected output (version may vary):
```
gcc (Homebrew GCC) 13.2.0
Copyright (C) Free Software Foundation, Inc.
```

## Clang

### Overview
Clang is a modern, fast compiler that is part of the LLVM project. It provides excellent diagnostics and is the default compiler on macOS. Clang supports the latest C and C++ standards and is widely used in performance-critical applications. It is also a true cross-platform compiler. I personally like to use clang because its the fastest to add new features.

### On Windows
Clang is available on Windows as part of LLVM and can be installed through multiple methods, including the official LLVM distribution and MSYS2.

#### Installation Steps:
1. **Download LLVM** → [LLVM Releases](https://github.com/llvm/llvm-project/releases)
2. **Run the Installer** and follow the setup instructions.
3. **Add to Path**:
   - Locate the installation directory (usually `C:\Program Files\LLVM\bin`).
   - Copy the full path.
   - Press `Win + R`, type `sysdm.cpl`, and press Enter.
   - Navigate to the `Advanced` tab and click `Environment Variables`.
   - Under `System Variables`, find `Path`, click `Edit`, then `New`, and paste the copied path.
   - Click `OK` to save and exit.

#### Verification:
Open Command Prompt or PowerShell and type:
```sh
clang --version
```
Expected output (version may vary):
```
clang version 17.0.0 (LLVM 17.0.0)
Target: x86_64-pc-windows-msvc
Thread model: posix
InstalledDir: C:\Program Files\LLVM\bin
```

### On Linux
Clang is available in most Linux distributions and can be installed using the package manager.

For Ubuntu, Debian, and similar distributions:
```sh
sudo apt update && sudo apt install clang
```

For Fedora:
```sh
sudo dnf install clang
```

For Arch Linux:
```sh
sudo pacman -S clang
```

#### Verification:
Type in the terminal:
```sh
clang --version
```
Expected output (version may vary):
```
clang version 17.0.0 (Fedora 17.0.0-1.fc38)
Target: x86_64-pc-linux-gnu
Thread model: posix
```

### On macOS
Clang comes pre-installed with Xcode and the Xcode Command Line Tools.

#### Installation Steps:
1. **Install Xcode Command Line Tools**:
   ```sh
   xcode-select --install
   ```
   This will install Clang and other development tools.
2. **Alternative: Install LLVM via Homebrew**:
   ```sh
   brew install llvm
   ```
   To use Homebrew’s Clang instead of Apple’s version, add this to your shell profile:
   ```sh
   export PATH="/opt/homebrew/opt/llvm/bin:$PATH"
   ```

#### Verification:
Type in the terminal:
```sh
clang --version
```
Expected output (version may vary):
```
Apple clang version 14.0.3 (clang-1403.0.22.14.1)
Target: arm64-apple-darwin22.3.0
Thread model: posix
```


## MSVC (Microsoft Visual C++)

### Overview
Microsoft Visual C++ (MSVC) is the compiler provided by Microsoft and is included with Visual Studio. It is the best choice for Windows development, offering excellent optimization and debugging tools. While MSVC is technically available for other platforms through remote development extensions, it is not recommended for use outside Windows.

### Installation on Windows
MSVC is available as part of the Visual Studio toolset and is the preferred compiler for Windows development.

#### Installation Steps:
1. **Download Visual Studio** → [Visual Studio Download](https://visualstudio.microsoft.com/downloads/)
2. **Run the Installer** and select the following workloads:
   - `Desktop development with C++`
   - Ensure that `MSVC v143` (or the latest version) is selected under `Individual components`.
3. **Complete Installation** by following the setup instructions.

#### Verification:
Once installed, open the `Developer Command Prompt` for VS and type:
```sh
cl
```
Expected output (version may vary):
```
Microsoft (R) C/C++ Optimizing Compiler Version 19.36.32532 for x64
Copyright (C) Microsoft Corporation.  All rights reserved.
```

### Important Notes
- MSVC is optimized for Windows development and integrates well with the Windows API.
- For non-Windows platforms, GCC or Clang is a better choice.
- The latest C++ standards may not be fully supported in MSVC compared to GCC or Clang.
- msvc should only be used via visual studio or vs command promt , it's not recommended to add `cl.exe` in environment path.

#### Additional Resources:
- [MSVC Documentation](https://learn.microsoft.com/en-us/cpp/overview/visual-cpp-in-visual-studio?view=msvc-latest)
- [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio)




