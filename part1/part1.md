# Part 1

1. Since `i` is declared using var, it's scope is the scope of the enclosing
function (discountPrices). Therefore, line 11 prints the last value of `i` in
the console.

2. Likewise, `discountedPrice` is declared globally within the function:
`discountPrices`. Therefore, line 12 prints the last value of `discountPrices`.

3. Again, `finalPrice` is declared globally within the current function. Line
13 prints the last value of `finalPrice`.

4. The function returns a list: `[50, 100, 150]`. The algorithm iterates through
the input list and fractionally reduces each element by the discount ratio. The
algorithm then rounds the result to the nearest whole number.

5. Since `i` is declared using `let`, it's scope is the scope of the for loop.
Therefore, line 11 results in a reference error, since the `i` is no longer
within scope

6. Since `discountedPrice` is declared using `let`, it's scope is the scope of
the for loop. Therefore, line 12 also results in a reference error (given the
program runs past line 11).

7. Even though `finalPrice` is declared using `let`, it's declared within the
scope of the entire function, therefore, line 13 prints the last value of
`finalPrice`.

8. Assuming lines 11 and 12 are successful, the function returns `[50, 100,
150]`. The function of this algorithm did not change by changing the variable
declarations from `var` to `let`.

9. Line 11 results in a reference error. Like the algorithm above, `i` can only
be accessed within the scope of the for loop.

10. Line 12 also results in a reference error. `discountedPrice` can only be
accessed within the scope of the for loop.

11. Line 13 prints `0` since `const` variables cannot be modified.

12. The function returns the list: `[0, 0, 0]`. The algorithm pushes values of
`finalPrice`; since `finalPrice` is declared const and initialized 0, the
algorithm is unable to modify its value. Therefore, the algorithm can only
insert 0's into the list.

13. Data Types
    1. student.name;
    2. student.['Grad Year'];
    3. student.greeting();
    4. student['Favorite Teacher'].name;
    5. student.courseLoad[0];

14. Arithmetic
    1. '32', the first type is a string, therefore + implies concatenation and
    2 is converted to  '2'
    2. 1, there is no string - operation, so '3' is converted to numeric 3
    3. 3, the first type is numeric so + implies addition. Null is therefore  
    converted to numeric 0.
    4. '3null', the first type is a string, therefore + implies concatenation
    and null is converted to 'null'.
    5. 4, neither boolean does not support + operation therefore true is
    converted to numeric 1.
    6. 0, neither boolean nor null types support + operation therefore false and
    null are both converted to numeric 0.
    7. "3undefined", the first type is a string so undefined is converted to
    'undefined'.
    8. Nan, neither strings nor undefined type support - operation, therefore
    both are converted to numeric types. Since undefined is converted to Nan,
    any resulting numeric operation results in Nan.

15. Comparisons
    1. true, the first type is string so 1 is converted to '1'. '2' is still
    lexicographicaly greater than '1'.
    2. false, '2' is lexicographicaly greater than '12'.
    3. true, '2' is converted to numeric 2, which is equal to itself.
    4. false, we do a strict equality, so no type conversion is performed.
    Values of different types cannot be equivalent.
    5. false, booleans in comparisons are converted to numerics. True becomes
    numeric 1 which is not equal to 2.
    6. true, the result of Boolean(int) is true when the integer is non-zero.
    Then, both true values are converted to 1 which is equivalent to each other.

16. the == operation will perform type conversions to match the type of both
arguments. The  === operation will not perform type conversions.

17. 'How are you?' gets printed. The boolean value of 2 is true; its evaluated
this way since 2 is result of the expression in the if statement, therefore
that result gets converted to a boolean type.

18. See `part1-question18.js`

19. `[6, 8, 10]`. The algorithm iterates through the input and passes each
element to the function `doSomething` along with a lambda that computes `x*2`.
Then, `doSomething` passes the result of adding 2 to the input to that very
lambda resulting in an overall operation of `2x+4`.

20. See `part1-question20.js`

21. 1, 4, 3, 2
