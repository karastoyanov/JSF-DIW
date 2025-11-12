let letter = 'a';

// Different approach than in the exercise
if (letter === letter.toUpperCase()) {
  console.log("A ->", letter.toLowerCase());
}

if (letter === letter.toLowerCase()) {
  console.log(letter + " ->", letter.toUpperCase());
}
