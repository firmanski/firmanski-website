let i = 0;
const txt = "Lorem ipsum dummy text blabla.";
const speed = 50;

export function charParser<String>(sentence: string) {
  const newSentence = sentence.split("");

  return setTimeout(() => {
    newSentence.map((char) => char);
  }, 100);
}
