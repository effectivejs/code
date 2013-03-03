var aIndex = "a".charCodeAt(0); // 97
var random = "";

for (var i = 0; i < 8; i++) {
    random += String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
}
random; // "bdwvfrtp" (different result each time)
