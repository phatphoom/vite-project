const Antonym = ({ result }) => {
  const { meanings } = result;
  return (
    <>
      <h3>Antonym</h3>
      {meanings &&
        meanings.map((meaning) =>
          meaning.antonyms?.map((syn) => <li>{syn}</li>)
        )}
    </>
  );
};

export default Antonym;
