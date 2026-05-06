// Tumne already kaafi sahi points likhe hain 👍
// main bas isko **clean, structured + interview-ready notes** bana deta hoon — taaki tum revise bhi kar sako aur samjha bhi sako 👇

// ---

// # Node.js Deep Notes (Clean Version)

// ---

// ## 🔹 1. Basic System Info

// ```js
// console.log(process.versions.node)
// console.log(process.platform)
// ```

// ### 📌 Output samajh:

// * `process.versions.node` → Node.js version
// * `process.platform` → OS (win32, linux, darwin)

// ---

// ## 🔹 2. CPU Info

// ```js
// const os = require("os")
// console.log(os.cpus().length)
// ```

// 👉 CPU cores count deta hai
// ❗ Agar `0` aa raha hai → environment issue / restricted runtime

// ---

// # ⚙️ 3. Node.js Under the Hood

// 👉 Node.js = combination of 3 main parts:

// ```
// Node.js = V8 Engine + Libuv + C++ Bindings
// ```

// ---

// ## 🔸 (1) V8 Engine

// 👉 Google ka engine (Chrome me bhi use hota hai)

// ### Kaam:

// * JavaScript ko machine code me convert karta hai

// ### ⚡ Important Concept:

// 👉 **JIT (Just-In-Time Compilation)**

// * Na pure interpreted
// * Na pure compiled

// 👉 Hybrid approach:

// ```
// Code → Parse → Compile (jitna needed) → Execute
// ```

// ✔ Fast + optimized

// ---

// ## 🔸 (2) Libuv (VERY IMPORTANT)

// 👉 C library hai (Node ka backbone)

// ### Ye kya provide karta hai?

// * Event Loop
// * Thread Pool
// * Async I/O
// * File system operations
// * DNS lookup

// ---

// ### 💡 Core concept:

// > JavaScript single-threaded hai
// > Libuv background me multi-threading handle karta hai

// ---

// ### Example:

// ```js
// fs.readFile("file.txt", () => {})
// ```

// 👉 Flow:

// ```
// JS code → Node bindings → Libuv → OS → result back
// ```

// ---

// ## 🔸 (3) C++ Bindings

// 👉 Bridge hai:

// * JavaScript (V8)
// * Libuv (C)

// ### Simple samajh:

// > Tum JS me code likhte ho → bindings usko C/C++ me convert karke Libuv ko dete hain

// ---

// # 🔥 4. Execution Model (Important)

// ```text
// JS (Single Thread)
//        ↓
// Node APIs
//        ↓
// Libuv (Thread pool + Event Loop)
//        ↓
// OS
// ```

// ---

// # ⚡ 5. Interpreted vs Compiled vs JIT

// ## 🔹 Interpreted

// * Line-by-line execute
// * Slow but flexible

// ## 🔹 Compiled

// * Pehle machine code
// * Fast execution

// ## 🔹 JIT (JavaScript)

// 👉 Dono ka mix

// > “Jitna code run hona hai utna hi compile karo”

// ---

// # 🌍 6. Global Object

// ## 🔸 Node.js:

// ```js
// console.log(global)
// ```

// ## 🔸 Universal:

// ```js
// console.log(globalThis)
// ```

// ---

// ## 💡 Difference:

// | Concept      | Meaning                 |
// | ------------ | ----------------------- |
// | `global`     | Node.js specific        |
// | `globalThis` | Har environment me same |

// ---

// ## ✅ Best Practice:

// 👉 Always use `globalThis`

// ---

// # ⚠️ Important Behavior

// ```js
// var x = 10
// console.log(globalThis.x) // ❌ undefined (Node)
// ```

// 👉 Kyun?

// * Node.js modules isolate hote hain
// * Global scope me directly attach nahi hota

// ---

// ## ✅ Correct:

// ```js
// globalThis.x = 10
// ```

// ---

// # 🧠 7. One-Line Summary (Interview Gold)

// 👉 Node.js works on:

// > V8 engine for execution + Libuv for async handling + C++ bindings for communication

// 👉 JavaScript:

// > Single-threaded but async via Libuv

// 👉 Global object:

// > Use `globalThis` for universal access

// ---

// # 🔥 FINAL QUICK REVISION

// * Node = V8 + Libuv + Bindings
// * V8 = JS → Machine code (JIT)
// * Libuv = async + threads + event loop
// * JS = single-threaded
// * Async = handled by Libuv
// * `globalThis` = universal global

// ---


// logout user ko posts e karna
// + operator in JavaScript is special
// If any one operand is a string, it does concatenation
// So '8' stays string and 1 becomes '1'

// 👉 Result: '8' + '1' = '81'

// \\🔹 Ternary Operator in JavaScript

// Short form of if-else 👇

// condition ? value_if_true : value_if_false

// ### 🔹 Hoisting – Short Notes

// * **Function Declaration ✅ (Fully hoisted)**

// ```js
// sayHi(); // works

// function sayHi() {}
// ```

// * **Function Expression ❌ (Not usable before init)**

// ```js
// sayHi(); // error

// const sayHi = function() {};
// ```

// * **Arrow Function ❌ (Not usable before init)**

// ```js
// sayHi(); // error

// const sayHi = () => {};
// ```

// ---

// ### 🔥 Key Points:

// * `var` → hoisted (value = `undefined`)
// * `let/const` → hoisted but in **TDZ** ❌
// * Only **function declaration** usable before definition

// ---

// ### ⚡ One Line:

// 👉 **Arrow & function expression hoist nahi hoti (usable nahi hoti before definition)**
