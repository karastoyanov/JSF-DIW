/**
 * DTYPES01-018: The following permanent text is given:
  Primitive
  Print on the console the following:
  On the first line – print the first character.
  On the second line – print first two characters.
  On the third line – print first three characters and so on until the whole word is printed.
  Pad each line with space character(s), so the text is right justified.
 */

const Permanent = 'Primitive';
const width = Permanent.length;

for (let i = 0; i < width; i++) {
  console.log(Permanent.slice(0, i + 1).padStart(width, ' '));
}