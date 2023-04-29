const Comp = ({ result }) => {
  // console.log(result);
  const { word, meanings, phonetic } = result;
  return (
    <div>
      <p>{word}</p>
      <p>{phonetic}</p>
      {meanings &&
        meanings.map((meaning) => (
          <div key={meaning.partOfSpeech}>
            <h3>{meaning.partOfSpeech}</h3>
            <ul>
              {meaning.definitions.slice(0, 3).map((definition, index) => (
                <li key={index}>{definition.definition}</li>
              ))}
            </ul>
          </div>
        ))}
      <div>
        <h3>example</h3>
        {meanings &&
          meanings.map((meaning) => (
            <div>
              {meaning.definitions.slice(0, 3).map((example, index) => (
                <p key={index}>{example.example}</p>
              ))}
            </div>
          ))}
      </div>
      <div>
        <h3>example</h3>
        {meanings &&
          meanings.map((meaning) =>
            meaning.definitions.map((syn, index) => {
              <p key={index}>{syn}</p>;
            })
          )}
      </div>
    </div>
  );
};

export default Comp;
