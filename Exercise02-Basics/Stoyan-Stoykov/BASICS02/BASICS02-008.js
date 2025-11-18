let emoji1 = String.fromCodePoint(0x1f600);
let emoji2 = String.fromCodePoint(0x1f680);
let emoji3 = String.fromCodePoint(0x1f4a9);
let emoji4 = String.fromCodePoint(0x1f44d);
let emoji5 = String.fromCodePoint(0x1f3c3);

let emojis = [emoji1, emoji2, emoji3, emoji4, emoji5];

emojis.forEach((emoji) => {
  console.log(emoji + " Hex: 0x" + emoji.codePointAt(0).toString(16));
});
