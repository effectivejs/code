"𝄞 clef".length; // 7
"G clef".length; // 6

"𝄞 clef".charCodeAt(0);     // 55348 (0xd834)
"𝄞 clef".charCodeAt(1);     // 56606 (0xdd1e)
"𝄞 clef".charAt(1) === " "; // false
"𝄞 clef".charAt(2) === " "; // true

/^.$/.test("𝄞");  // false
/^..$/.test("𝄞"); // true
