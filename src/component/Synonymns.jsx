const Synonym = ({ result }) => {
  const { meanings } = result;

  return (
    <div>
      <h4>Synonym</h4>
      <div className="syn">
        {meanings &&
          meanings.map((meaning) =>
            meaning.synonyms?.slice(0, 4).map((syn) => <li>{syn}</li>)
          )}
      </div>
    </div>
  );
};

export default Synonym;
