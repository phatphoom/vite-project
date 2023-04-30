export default function Example({ result }) {
  const { meanings } = result;
  return (
    <>
      <h3>example</h3>
      {meanings &&
        meanings.slice(0, 2).map((meaning, index) => (
          <div key={index}>
            {meaning.definitions.slice(-3).map((example, index) => (
              <p key={index}>{example.example}</p>
            ))}
          </div>
        ))}
    </>
  );
}
