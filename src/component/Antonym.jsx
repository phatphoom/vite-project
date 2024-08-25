const Antonym = ({ result }) => {
  const { meanings } = result;
  return (
    <div>
      <h4>Antonym</h4>
      <div className="ayn">
        {meanings &&
          meanings.map((meaning) =>
            meaning.antonyms?.map((syn) => <li>{syn}</li>)
          )}
      </div>
    </div>
  );
};

export default Antonym;
