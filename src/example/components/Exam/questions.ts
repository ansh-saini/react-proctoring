export default [
  {
    id: 1,
    text: 'Javascript is an _______ language?',
    options: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'],
  },
  {
    id: 2,
    text: 'Which of the following keywords is used to define a variable in Javascript?',
    options: ['var', 'let', 'Both A and B', 'None of the above'],
  },
  {
    id: 3,
    text: 'Which of the following methods is used to access HTML elements using Javascript?',
    options: ['getElementbyId()', 'getElementsByClassName()', 'Both A and B', 'None of the above'],
  },
  {
    id: 4,
    text: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
    options: ['Throws an error', 'Ignores the statements', 'Gives a warning', 'None of the above'],
  },
  {
    id: 5,
    text: 'Which of the following methods can be used to display data in some form using Javascript?',
    options: ['document.write()', 'console.log()', 'window.alert()', 'All of the above'],
  },
  {
    id: 6,
    text: 'How can a datatype be declared to be a constant type?',
    options: ['const', 'var', 'let', 'constant'],
  },
  {
    id: 7,
    text: 'What will be the output of the following code snippet?\n\n<script type="text/javascript">\na = 5 + "9";\ndocument.write(a);\n</script>',
    options: ['Compilation Error', '14', 'Runtime Error', '59'],
  },
  {
    id: 8,
    text: 'What will be the output of the following code snippet?\n\n<script type="text/javascript" language="javascript">\n  \nvar a = "Scaler";\nvar result = a.substring(2, 4);\ndocument.write(result);\n  \n</script>',
    options: ['al', 'ale', 'cal', 'caler'],
  },
  {
    id: 9,
    text: 'What will be the output of the following code snippet?\n\n<script type="text/javascript" language="javascript">\n \nvar x=12;\nvar y=8;\nvar res=eval("x+y");\ndocument.write(res);\n \n</script>',
    options: ['20', 'x+y', '128', 'None of the above'],
  },
  {
    id: 10,
    text: 'When the switch statement matches the expression with the given labels, how is the comparison done?',
    options: [
      'Both the datatype and the result of the expression are compared.',
      'Only the datatype of the expression is compared.',
      'Only the value of the expression is compared.',
      'None of the above.',
    ],
  },
  {
    id: 11,
    text: 'What keyword is used to check whether a given property is valid or not?',
    options: ['in', 'is in', 'exists', 'lies'],
  },
  {
    id: 12,
    text: 'What is the use of the <noscript> tag in Javascript?',
    options: [
      'The contents are displayed by non-JS-based browsers.',
      'Clears all the cookies and cache.',
      'Both A and B.',
      'None of the above.',
    ],
  },
  {
    id: 13,
    text: 'What will be the output of the following code snippet?\n\n(function(){\n setTimeout(()=> console.log(1),2000);\n console.log(2);\n setTimeout(()=> console.log(3),0);\n console.log(4);\n})();',
    options: ['1 2 3 4', '2 3 4 1', '2 4 3 1', '4 3 2 1'],
  },
  {
    id: 14,
    text: 'What will be the output of the following code snippet?\n\n(function(a){\n return (function(){\n   console.log(a);\n   a = 6;\n })()\n})(21);',
    options: ['6', 'NaN', '21', 'None of the above'],
  },
  {
    id: 15,
    text: 'What will be the output of the following code snippet?\n\nfunction solve(arr, rotations){\n if(rotations == 0) return arr;\n for(let i = 0; i < rotations; i++){\n   let element = arr.pop();\n   arr.unshift(element);\n }\n return arr;\n}\n// solve([44, 1, 22, 111], 5);',
    options: ['[111, 44, 1, 22]', '[44, 1, 22, 111]', '[111, 44, 1, 22]', '[1, 22, 111, 44]'],
  },
  {
    id: 16,
    text: 'What will be the output for the following code snippet?\n\n<p id="example"></p>  \n<script>  \nfunction Func()  \n{  \ndocument.getElementById("example").innerHTML=Math.sqrt(81);  \n}  \n</script>',
    options: ['9', '81', 'Error', '0'],
  },
  {
    id: 17,
    text: 'When an operator’s value is NULL, the typeof returned by the unary operator is:',
    options: ['Boolean', 'Undefined', 'Object', 'Integer'],
  },
  {
    id: 18,
    text: 'What will be the output of the following code snippet?\n\nvar a = 1;  \nvar b = 0;  \nwhile (a <= 3)  \n{  \n   a++;  \n   b += a * 2;  \n   print(b);\n}',
    options: ['4 10 18', '1 2 3', '1 4 7', 'None of the above'],
  },
  {
    id: 19,
    text: 'What does the Javascript “debugger” statement do?',
    options: [
      'It will debug all the errors in the program at runtime.',
      'It acts as a breakpoint in a program.',
      'It will debug error in the current statement if any.',
      'All of the above.',
    ],
  },
  {
    id: 20,
    text: 'What will be the output of the following code snippet?\n\nvar a = Math.max();\nvar b = Math.min();\nprint(a);\nprint(b);',
    options: [
      '-Infinity Infinity',
      'Infinity -Infinity',
      'Infinity Infinity',
      '-Infinity -Infinity',
    ],
  },
  {
    id: 21,
    text: 'What will be the output of the following code snippet?\n\nvar a = Math.max() < Math.min();\nvar b = Math.max() > Math.min();\nprint(a);\nprint(b);',
    options: [' true false', 'false true', 'true true', 'false false'],
  },
  {
    id: 22,
    text: 'What will be the output of the following code snippet?\n\nvar a = true + true + true * 3;\nprint(a)',
    options: ['3', '0', 'Error', '5'],
  },
  {
    id: 23,
    text: 'What is the output of the following code snippet?\n\nprint(NaN === NaN);',
    options: ['true', 'false', 'undefined', 'Error'],
  },
  {
    id: 24,
    text: 'What will be the output of the following code snippet?\n\nprint(typeof(NaN));',
    options: ['Object', 'Number', 'String', 'None of the above'],
  },
  {
    id: 25,
    text: 'What does the ‘toLocateString()’ method do in JS?',
    options: [
      'Returns a localised object representation.',
      'Returns a parsed string.',
      'Returns a localized string representation of an object.',
      'None of the above.',
    ],
  },
  {
    id: 26,
    text: 'The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?',
    options: [
      'Object Serialization',
      'Object Encapsulation',
      'Object Inheritance',
      'None of the above',
    ],
  },
  {
    id: 27,
    text: 'Which function is used to serialize an object into a JSON string in Javascript?',
    options: ['stringify()', 'parse()', 'convert()', 'None of the above'],
  },
  {
    id: 28,
    text: 'The 3 basic object attributes in Javascript are:',
    options: [
      "Class, prototype, objects' parameters.",
      "Class, prototype, object's extensible flag.",
      "Class, parameters, object's extensible flag.",
      "Classes, Native object, and Interfaces and Object's extensible flag.",
    ],
  },
  {
    id: 29,
    text: 'What will be the output of the following code snippet?\n\nlet sum = 0; \nconst a = [1, 2, 3];\na.forEach(getSum);\nprint(sum);\nfunction getSum(ele) {\n   sum += ele;\n}',
    options: ['6', '1', '2', 'None of the above'],
  },
  {
    id: 30,
    text: 'What will be the output of the following code snippet?\n\na = [1, 2, 3, 4, 5];\nprint(a.slice(2, 4));',
    options: ['3, 4', '2, 3', '3, 4, 5', '2, 3, 4'],
  },
  {
    id: 31,
    text: 'What will be the output of the following code snippet?\n\nprint(parseInt("123Hello"));\nprint(parseInt("Hello123"));',
    options: ['123 NaN', '123Hello Hello123', 'NaN NaN', '123 123'],
  },
  {
    id: 32,
    text: 'Which of the following are closures in Javascript?',
    options: ['Variables', 'Functions', 'Objects', 'All of the above'],
  },
  {
    id: 33,
    text: 'Which of the following is not a Javascript framework?',
    options: ['Node', 'Vue', 'React', 'Cassandra'],
  },
  {
    id: 34,
    text: 'What will be the output of the following code snippet?\n\nvar a = "hello";\nvar sum = 0;\nfor(var i = 0; i < a.length; i++) {\n   sum += (a[i] - \'a\');\n}\nprint(sum);',
    options: ['47', 'NaN', '0', 'None of the above'],
  },
  {
    id: 35,
    text: 'What keyword is used to declare an asynchronous function in Javascript?',
    options: ['async', 'await', 'setTimeout', 'None of the above'],
  },
  {
    id: 36,
    text: 'How to stop an interval timer in Javascript?',
    options: ['clearInterval', 'clearTimer', 'intervalOver', 'None of the above'],
  },
  {
    id: 37,
    text: "What will be the output of the following code snippet?\n\nconst set = new Set();\nset.add(5);\nset.add('Hello');\nset.add({ name: 'Scaler' });\nfor (let item of set) {\n console.log(item + 6);\n}",
    options: [
      '11 NaN NaN',
      '11 NaN [object Object]',
      '11 Hello6 [object Object]6',
      'None of the above',
    ],
  },
  {
    id: 38,
    text: 'How are objects compared when they are checked with the strict equality operator?',
    options: [
      'The contents of the objects are compared',
      'Their references are compared',
      'Both A and B',
      'None of the above',
    ],
  },
  {
    id: 39,
    text: 'What does … operator do in JS?',
    options: [
      'It is used to spread iterables to individual elements',
      'It is used to describe a datatype of undefined size',
      'No such operator exists',
      'None of the above',
    ],
  },
  {
    id: 40,
    text: 'What will be the output of the following code snippet?\n\nconst example = ({ a, b, c }) => {\n console.log(a, b, c);\n};\nexample(0, 1, 2);',
    options: [
      '0 1 2',
      '0 Undefined Undefined',
      'Undefined Undefined Undefined',
      'None of the above',
    ],
  },
  {
    id: 41,
    text: 'What will be the output of the following code snippet?\n\nlet a = [1, 2, 3, 4, 5, 6];\nvar left = 0, right = 5;\nvar found = false;\nvar target = 5;\nwhile(left <= right) {\n   var mid = Math.floor((left + right) / 2);\n   if(a[mid] == target) {\n       found = true;\n       break;\n   }\n   else if(a[mid] < target) {\n       left = mid + 1;\n   }\n   else {\n       right = mid - 1;\n   }\n}\nif(found) {\n   print("YES");\n}\nelse {\n   print("NO");\n}',
    options: ['YES', 'NO', 'Syntax Error', 'None of the above'],
  },
  {
    id: 42,
    text: 'What will be the output of the following code snippet?\n\nlet s = "00000001111111";\nlet l = 0, r = s.length - 1, ans = -1;\nwhile(l <= r) {\n   var mid = Math.floor((l + r) / 2);\n   if(s[mid] == \'1\') {\n       ans = mid;\n       r = mid - 1;\n   }\n   else {\n       l = mid + 1;\n   }\n}\nprint(ans);',
    options: ['8', '7', '0', '1'],
  },
  {
    id: 43,
    text: 'What will be the output of the following code snippet?\n\nlet n = 24;\nlet l = 0, r = 100, ans = n;\nwhile(l <= r) {\n   let mid = Math.floor((l + r) / 2);\n   if(mid * mid <= n) {\n       ans = mid;\n       l = mid + 1;\n   }\n   else {\n       r = mid - 1;\n   }\n}\nprint(ans);',
    options: ['5', '4', '6', '3'],
  },
  {
    id: 44,
    text: 'What will be the output of the following code snippet?\n\nconst obj1 = {Name: "Hello", Age: 16};\nconst obj2 = {Name: "Hello", Age: 16};\nprint(obj1 === obj2);',
    options: ['true', 'false', 'Undefined', 'None of the above'],
  },
  {
    id: 45,
    text: 'What happens when we run this code?\n\nfunction dog() {\n   print("I am a dog.");\n}\ndog.sound = "Bark";',
    options: ['Syntax Error', '“I am a dog” gets printed', 'ReferenceError', 'Nothing happens'],
  },
  {
    id: 46,
    text: 'How do we write a comment in javascript?',
    options: ['/* */', '//', '#', '$ $'],
  },
  {
    id: 47,
    text: 'Which object in Javascript doesn’t have a prototype?',
    options: [
      'Base Object',
      'All objects have a prototype',
      'None of the objects have a prototype',
      'None of the above',
    ],
  },
  {
    id: 48,
    text: 'What will be the output of the following code snippet?\n\nfunction test(...args) {\n console.log(typeof args);\n}\ntest(12);',
    options: ['NaN', 'Number', 'Object', 'Array'],
  },
  {
    id: 49,
    text: 'What will be the output of the following code snippet?\n\nconst obj1 = {first: 20, second: 30, first: 50};\nconsole.log(obj1);',
    options: [
      '{first: 20, second: 30}',
      '{first: 50, second: 30}',
      '{first: 20, second: 30, first: 50}',
      'Syntax Error',
    ],
  },
  {
    id: 50,
    text: 'Which of the following are not server-side Javascript objects?',
    options: ['Date', 'FileUpload', 'Function', 'All of the above'],
  },
]
