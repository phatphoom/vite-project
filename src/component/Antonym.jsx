const Antonym = ({ result }) => {
  const { meanings } = result;
  return (
    <>
      <h3>Synonym</h3>
      {meanings &&
        meanings.map((meaning) =>
          meaning.antonym?.map((syn) => <li>{syn}</li>)
        )}
    </>
  );
};

export default Antonym;
