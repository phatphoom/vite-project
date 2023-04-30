export default function Word({ result }) {
  const { word, phonetic } = result;
  return (
    <>
      <p>{word}</p>
      <p>{phonetic}</p>
    </>
  );
}
