# Scientific Calculator
A feature-rich JavaScript-based scientific calculator with Light and Dark modes, usable History and number Conversions between different Numeral Systems. 

<p align="center"><a href="https://scientific-calculator.mirokrastanov.repl.co/"><img src="https://raw.githubusercontent.com/mirokrastanov/Software-Engineering-SoftUni/main/miscellaneous/sc-calc-1.png" alt="img-banner" height="300px"></a></p>

## Description
This scientific calculator is Fully Responsive and work with multiple resolutions - supporting most Smartphone & Tablet screens on the market. It offers various features and here is a list of them:
- Ability to change between Light and Dark mode.
- Responsive Design - support for various resolutions
- Can perform the four basic operations of arithmetic. - Addition, Subtraction, Multiplication & Division.
- Additionally, this scientific calculator can perform the following mathematical operations - [Percent](https://en.wikipedia.org/wiki/Percentage), [Factorial](https://en.wikipedia.org/wiki/Factorial), [Natural Logarithm](https://en.wikipedia.org/wiki/Natural_logarithm), [Logarithm](https://en.wikipedia.org/wiki/Logarithm), [Sine](https://en.wikipedia.org/wiki/Sine_and_cosine), [Cosine](https://en.wikipedia.org/wiki/Sine_and_cosine), [Tangent](https://en.wikipedia.org/wiki/Tangent), [Fraction](https://en.wikipedia.org/wiki/Fraction), [Square Root](https://en.wikipedia.org/wiki/Square_root), [Nth Root/Polynomial roots](https://en.wikipedia.org/wiki/Nth_root), [E (Mathematical Constant)](https://en.wikipedia.org/wiki/E_(mathematical_constant)), [Exponentiation](https://en.wikipedia.org/wiki/Exponentiation), [Pi (Mathematical Constant)](https://en.wikipedia.org/wiki/Pi).
- This scientific calculator can also store a result (STO) and Recall (RCL) it when needed.
- It can recall the last result (Ans) as well.
- It keeps history of all previous calculation results.
- The history allows for any previous result to be used / recalled to the screen for further operations.
- This scientific calculator also converts numbers (from and to) any of the four numeral systems listed below - Decimal, Binary, Octal and Hexadecimal.
- More information on the <a href="https://en.wikipedia.org/wiki/Decimal">Decimal numeral system</a>.
- More information on the <a href="https://en.wikipedia.org/wiki/Binary_number">Binary numeral system</a>.
- More information on the <a href="https://en.wikipedia.org/wiki/Octal">Octal numeral system</a>.
- More information on the <a href="https://en.wikipedia.org/wiki/Hexadecimal">Hexadecimal numeral system</a>.
- More information on the different <a href="https://en.wikipedia.org/wiki/Numeral_system">Numeral Systems</a>.


## Input & Output
  - Decimal input - An arabic number such as `0`, `1`, `2`, `3`, `4`, `5`, `6`,..., `+inf`, 
  - Binary output - A number made from zeroes and ones. Such as `0000`, `0001`, `0010`, `0011`, `0100`, `0101`, `0110`,..., `101011001001`,..., `+inf`. 
  - Octal input - An arabic number such as `0`, `1`, `2`, `3`, `4`, `5`, `6`,..., `+inf`, 
  - Hexadecimal output - Contains numbers from `0` - `9` and the characters `A`, `B`, `C`, `D`, `E`, `F`. Some examples are `E`, `36B0`, `155CEC`, `55E`.
 

## App Logic
### Functions with 0 Parameters
#### Primarily Constants and feature buttons where no input is required from the user. List below:
- `AC`, `DEL`, `Light/Dark` toggle, `e`, `pi`, `Ans`, `RCL` and `Use History`.

### Functions with 1 Parameter
#### They allow the user to input a single parameter and execute them directly, without the need for a second parameter. A list of those functions below:
- `%`, `x!`, `ln`, `log`, `sin`, `cos`, `tan`, `1/x`, `√`, `x^2` and `STO`.

### Functions with 2 Parameters
#### The user first inputs the first value then selects the function required and lastly the 2nd parameter. 
- Before inputing the 2nd parameter the user can see the 1st one as well as the chosen function on the screen. The user can also change the function before filling in the 2nd parameter, without a problem. Once the 2nd parameter is put in the user can either press `=` to see the result or chain another 2 parameter function. If they choose to chain another 2 parameter function the scientific calculator would first do the 1st calculation and use the result as the 1st paramater for the next operation. This can be chained indefinitely. 
- A list with those 2 parameter functions can be seen below:
-  `÷`, `×`, `+`, `-`, `y√x` and `x^y`.   
- The first parameter is always `x` and the second - `y`.

### Special Functions
#### History, Conversions & functions with an additional requirement. List below:
- `History` - Can be used if the user has done previous calculations. The user first selects the result they need from the `History` list and then presses the `Use History` button to populate the result on the screen.
- `Conversion toggle buttons` - The user can convert a value from one system to another by selecting the `From` system on the left hand side and the `To` system on the middle. Lastly by pressing the `Convert` button the scientific calculator will calculate the result. If the input is not in the right system selected on the `From` toggle the scientific calculator would throw an Error and alert the user with the following Error message `Error! Press 'AC' to clear.`.

### Conversion Table
  
|Decimal|Binary|Octal|Hexadecimal|
| :--: | :--: | :--: | :-: |
|0|0000|0|0|
|1|0001|1|1|
|2|0010|2|2|
|3|0011|3|3|
|4|0100|4|4|
|5|0101|5|5|
|6|0110|6|6|
|7|0111|7|7|
|8|1000|10|8|
|9|1001|11|9|
|10|1010|12|A|
|11|1011|13|B|
|12|1100|14|C|
|13|1101|15|D|
|14|1110|16|E|
|15|1111|17|F|


## What each button does (From LEFT to RIGHT | From TOP to BOTTOM)
- `Light/Dark` - Toggle between Light and Dark mode.
- `%` - Percentage.
- `AC` - All Clear.
- `DEL` - Deletes the last character from the current input.
- `÷` - Division.
- `x!` - Factorial.
- `ln` - Natural Logarithm.
- `log` - Logarithm.
- `1`, `2`, `3` - Inputs the respective number on the screen.
- `×` - Multiplication.
- `sin` - Sine.
- `cos` - Cosine.
- `tan` - Tangent.
- `4`, `5`, `6` - Inputs the respective number on the screen.
- `+` - Addition.
- `1/x` - Fraction.
- `√` - Square root. 
- `y√x` - Y root of x. Nth root.
- `7`, `8`, `9` - Inputs the respective number on the screen.
- `-` - Subtraction.
- `e` - Mathematical constant `e`. Inputs its value on the screen.
- `x^2` - `x` to the power of `2`
- `x^y` - `x` to the power of `y`
- `.` - Inputs a point for decimals on the screen.
- `0` - Inputs the respective number on the screen.
- `=` - Equals button.
- `pi` - Mathematical constant `pi`. Inputs its value on the screen.
- `Ans` - Recalls the last result.
- `STO` - Stores the current value for later use.
- `RCL` - Recalls the stored value and clears the storage.
- `A`, `B`, `C` - Inputs the respective letter, used for Hexadecimal input.
- `Use History` - Takes the selected value from the `History` toggle and inputs it on the screen.
- `History` - A toggle used for the selection of any result from past calculations. Once selected the button `Use History` sends it to the screen for use.
- `D`, `E`, `F` - Inputs the respective letter, used for Hexadecimal input.
- `Decimal` - A toggle used for the selection of a Numerical System `From` which to convert from.
- `Binary` - A toggle used for the selection of a Numerical System `To` which to convert to. 
- `Convert` - Once the 2 toggles (`From` & `To`) are toggled to the proper numerical systems the user can press the button `Convert` to execute the conversion.


## Live Demo
[<img src="https://github.com/mirokrastanov/Software-Engineering-SoftUni/blob/main/miscellaneous/try-now-btn.png?raw=true" alt="run-button" height="40px" />](https://scientific-calculator.mirokrastanov.repl.co/)
  
  
## [Source Code](https://github.com/mirokrastanov/ScientificCalculator/blob/main/app.js)

