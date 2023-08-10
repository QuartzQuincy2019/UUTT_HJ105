//database.js
//2023/8/2
//2023/8/5
//2023/8/6
//2023/8/8


//KEY -> CHARACTER
var KEY = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
    "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
    "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"",
    "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
    "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?",
    " ", "Enter"
];

var CHARACTER = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
    "~", "!", "@", "#", "$", "%", "^", "&amp;", "*", "(", ")", "_", "+",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
    "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"",
    "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
    "Z", "X", "C", "V", "B", "N", "M", "&lt;", "&gt;", "?",
    "&nbsp;", "<br>"
];

var signs = ["Enter", "Space", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "-", "_", "=", "+", "[", "]", "{", "}", ":", ";", "\"", "\'", "\\", "|", "<", ">",
    ".", ",", "/", "Shift", "CapsLock"
];//用于typingCount判定

//单向转换：SPECIAL_LIST_CHARACTER -> SPECIAL_LIST_KEY
var SPECIAL_LIST_KEY = [
    "&", "'", "\"", "<", ">", " "
];
var SPECIAL_LIST_CHARACTER = [
    "&", "'", "\"", "<", ">", " "
];

//v7.1.0
var INCORRECT_SET = [
    "·", "‘", "’", "“", "”",
    "：", "；", "《", "》", "，",
    "。", "￥", "！", "？", "、",
    "【", "】", "…", "—",
    "（", "）", "Ⅰ", "Ⅱ", "Ⅲ",
    "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ", "Ⅷ", "Ⅸ", "Ⅹ",
    "※", "☆", "★", "™", "©", "℡", "№", "§"
];
var CORRECT_SET = [
    " ", "'", "'", "\"", "\"",
    ": ", "; ", " ", " ", ", ",
    ". ", "$", "! ", "? ", ", ",
    "[", "]", "... ", "-",
    "(", ")", "1.", "2.", "3.",
    "4.", "5.", "6.", "7.", "8.", "9.", "10.",
    "*", "*", "*", "[Trade]", "[Copyright]", "[Telephone]", "No.", "[Section]"
];