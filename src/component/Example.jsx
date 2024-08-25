export default function Example({ result }) {
  const { meanings } = result;
  return (
    <>
      <h4>example</h4>
      <div>
        {meanings &&
          meanings.map((meaning, index) => (
            <ul key={index}>
              {meaning.definitions.slice(0, 4).map((example, index) => (
                <p key={index}>{example.example}</p>
              ))}
            </ul>
          ))}
      </div>
    </>
  );
}
