export default function MapFunction() {
  // Step 1 – Define arrays
  let numbers = [1, 4, 9, 16];
  let squares = numbers.map((n) => n * n);
  let cubes = numbers.map((n) => n * n * n);
  let todos = ["Buy milk", "Feed the pets"];

  // Step 2 – Render with ordered list numbering
  return (
    <div id="wd-map-function" style={{ lineHeight: "1.7em" }}>
      <h4 style={{ fontWeight: "600" }}>Map Function</h4>

      squares = {squares.join("")}
      <br />
      cubes = {cubes.join("")}
      <br />
      Todos:
      <ol
        style={{
          listStyleType: "decimal",
          paddingLeft: "1.5rem",
          marginTop: "0.3em",
          marginBottom: "0.3em",
        }}
      >
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
      <hr />
    </div>
  );
}
