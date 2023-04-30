const Synonym = ({ result }) => {
  const { meanings } = result;
  return (
    <>
      <h3>Synonym</h3>
      {meanings &&
        meanings.map((meaning) =>
          meaning.synonyms?.map((syn) => <li>{syn}</li>)
        )}
    </>
  );
};

export default Synonym;
