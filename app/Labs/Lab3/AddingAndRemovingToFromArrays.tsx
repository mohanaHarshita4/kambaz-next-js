export default function AddingAndRemovingToFromArrays() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];
  let todoArray = ["Buy milk", "Feed the pets"];

  numberArray1.push(6);
  stringArray1.push("string3");
  todoArray.push("Walk the dogs");

  numberArray1.splice(2, 1);
  stringArray1.splice(1, 1);

  return (
    <div id="wd-adding-removing-to-from-arrays" style={{ lineHeight: "1.7em" }}>
      <h4 style={{ fontWeight: "600" }}>Add/remove to/from arrays</h4>
      numberArray1 = {numberArray1.join("")} <br />
      stringArray1 = {stringArray1.join("")} <br />
      Todo list:
      <ol
        style={{
          listStyleType: "decimal",
          paddingLeft: "1.5rem",
          marginTop: "0.3em",
          marginBottom: "0.3em",
        }}
      >
        {todoArray.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
      <hr />
    </div>
  );
}
