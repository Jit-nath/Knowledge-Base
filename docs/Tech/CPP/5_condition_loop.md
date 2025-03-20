---
sidebar_position: 5
---

# Conditions

This is the most important basics you need to understand.  
Look at the statement:

> I will not go to college if it rains

> If its not sunday i will go to work else i will not go to work

These are regular statements but we can represent them into logics

if -> rains -> i will not go to college  
if -> not sunday -> i will go to work -> else -> i will not go

## IF-ELSE

In C++ we can write them like this:

```cpp
if(rain == true) {
    cout << "I will not go to college";
}
```

```cpp
if(day != sunday) {
    cout << "I will go to work";
}
else {
    cout << "I will not go";
}
```

These are called conditions, they provide programmers the power to make decisions based on situations.

Notice `==` and `!=`, they are not assigning `a = 10` or something like that.  
They check if the left side and right side are the same or not.

`==` : this checks if both sides are the same  
`!=` : this checks if both sides are not the same  
Similarly,  
`<=` : if left is less or equal to right  
`>=` : if left is greater or equal to right  
`&&` : checks if both true  
`||` : checks if any one is true  
`!` : reverses the statement

### Examples

**`==` Example:**
```cpp
if(a == b) {
    cout << "a and b are equal";
}
```

**`!=` Example:**
```cpp
if(a != b) {
    cout << "a and b are not equal";
}
```

**`<=` and `>=` Example:**
```cpp
if(a <= b) {
    cout << "a is less than or equal to b";
}
```

**`&&` Example:**
```cpp
if(a > 0 && b > 0) {
    cout << "Both are positive numbers";
}
```

**`||` Example:**
```cpp
if(a == 0 || b == 0) {
    cout << "One of the numbers is zero";
}
```

**`!` Example:**
```cpp
if(!raining) {
    cout << "It's not raining";
}
```

# Loops

To show numbers 1 - 10:

```cpp
cout << "1";
cout << "2";
cout << "3";
cout << "4";
cout << "5";
cout << "6";
cout << "7";
cout << "8";
cout << "9";
cout << "10";
```

Tiring right?

But there's a way to save the effort.

## For loop

```cpp
int i;
for(i = 1; i <= 10; i = i + 1){
    cout << i;
}
```

### Explanation:
- `i = 1` means we start `i` from 1  
- `i <= 10` means we finish counting when `i` reaches 10  
- `i = i + 1` means `i` increases each time  

This will produce the same output as before.

We could also use `i++` or `i+=1` in place of `i = i + 1`

> **Note:** `i++` will only increase `i` by 1 but `i+++` is not allowed.  
> Instead, we can write `i+=2` to add 2. 

We can also multiply, divide, and subtract using this:
```cpp
i *= 2;
i -= 2;
i /= 2;
```

## While loop

while loop is like `if statement` for loops
```cpp
if (the statement is true){  
    do this work  
    (until the statement is false)  
} 
```
It looks like this 

```cpp
int i = 1;
while(i <= 10) {
    cout << i << " ";
    i++;
}
```

### Explanation:
- `int i = 1;` initializes `i` with 1.
- `while(i <= 10)` checks if `i` is less than or equal to 10.
- Inside the loop, `cout << i << " ";` prints `i` followed by a space.
- `i++` increases the value of `i` by 1 in each iteration.

This too will print numbers from 1 to 10.

## Do While loop

this is also while loop but the statement inside the loop  
runs regardless of the condition only the first time  
afterwards the while will check the condition
```cpp
int i = 0
do{
    cout<< i ;
    i++
} while(i<=10)
```

**Its hard to grab for some people**  
think it like this:

```cpp
You play a game  
you run the game  
you hit exit  
game exists
```

so you run the game first time and check if you want to exit afterwars  

```cpp
do{
    play game
} while(user dont want to exit)
```
as simple as that✨.

# Switch

not the switch in our home