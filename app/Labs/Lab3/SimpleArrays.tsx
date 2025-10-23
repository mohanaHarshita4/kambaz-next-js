export default function SimpleArrays() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;

  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];
  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];

  const htmlArray1 = ["Buy milk", "Feed the pets"].map((todo, index) => (
    <li key={index}>{todo}</li>
  ));

  return (
    <div id="wd-simple-arrays" style={{ lineHeight: "1.7em" }}>
      <h4 style={{ fontWeight: "600" }}>Simple Arrays</h4>
      numberArray1 = {numberArray1.join("")} <br />
      stringArray1 = {stringArray1.join("")} <br />
      variableArray1 = {variableArray1.join("")} <br />
      Todo list:
      <ol
        style={{
          listStyleType: "decimal",
          paddingLeft: "1.5rem",
          marginTop: "0.3em",
          marginBottom: "0.3em",
        }}
      >
        {htmlArray1}
      </ol>
      <hr />
    </div>
  );
}
