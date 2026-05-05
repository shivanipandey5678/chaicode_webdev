"use strict";

/*
JavaScript is a loosely typed language.
This is not a bug, but a design choice to make it flexible for browser use.

We write code in TypeScript to get:

* Type safety
* Better developer experience (autocomplete, error checking)

TypeScript is then compiled into JavaScript before running.
*/

/*
In TypeScript:

* We define data types explicitly
* This helps with better tooling (like IntelliSense suggestions)
* All variables and function parameters should be typed
  */

// Example function
function add(a, b) {
return a + b;
}

const result = add(3, 5);
console.log(result);

/*
Workflow:

1. Write code in TypeScript (.ts)
2. Compile using TypeScript compiler:
   tsc filename.ts
3. This generates a JavaScript file (.js)
4. Run using Node.js:
   node filename.js

Note:

* If there are type errors, TypeScript will not compile the code
* Final deployed code is always JavaScript
  */
