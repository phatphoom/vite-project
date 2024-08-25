export default function Meanings({ result }) {
  const { meanings } = result;
  return (
    meanings &&
    meanings.map((meaning) => (
      <div key={meaning.partOfSpeech}>
        <h4>{meaning.partOfSpeech}</h4>
        <ul>
          {meaning.definitions
            .filter(
              (definition) =>
                definition.partOfSpeech !== "verb" ||
                definition.definition !== "To lament."
            )
            .slice(0, 3)
            .map((definition, index) => (
              <li key={index}>{definition.definition}</li>
            ))}
        </ul>
      </div>
    ))
  );
}
