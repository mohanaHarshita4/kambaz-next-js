"use client"
export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        <p>Example demonstrating h2, h3, h4 etc.</p>
      </div>

      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">This is the first paragraph. The paragraph tag is used to format vertical gaps.</p>
        <p id="wd-p-2">This is the second paragraph. Browsers ignore whitespace; wrap text in &lt;p&gt; to keep spacing.</p>
        <p id="wd-p-3">This is the third paragraph. Wrap each paragraph with the paragraph tag.</p>
      </div>

      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        <ol id="wd-coffee">
          <li>Boil Milk .</li>
          <li>Brew fresh coffee beans.</li>
          <li>Add sugar in a cup.</li>
          <li>Add the freshly brewed coffee to it.</li>
          <li>Stir it well to form lather.</li>
          <li>Add pipping hot milk.</li>
          <li>Mix it well.</li>
          <li>Serve with cookies and enjoy!</li>
        </ol>

        <h5>Unordered List Tag</h5>
        <ul id="wd-my-Fruits">
          <li>Apples</li>
          <li>Kiwi</li>
          <li>Oranges</li>
        </ul>
      </div>

      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr><th>Quiz</th><th>Topic</th><th>Date</th><th>Grade</th></tr>
          </thead>
          <tbody>
            <tr><td>Q1</td><td>HTML</td><td>2/3/21</td><td>85</td></tr>
            <tr><td>Q2</td><td>CSS</td><td>2/10/21</td><td>90</td></tr>
            <tr><td>Q3</td><td>JS</td><td>2/17/21</td><td>95</td></tr>
          </tbody>
          <tfoot>
            <tr><td colSpan={3}>Average</td><td>90</td></tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-images">
        <h4>Image tag</h4>
        <p>Remote image:</p>
        <img id="wd-starship" width="300px" src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
        <p>Local image (save an image to public/images/teslabot.jpg):</p>
        <img id="wd-teslabot" src="/images/teslabot.jpg" height="150px" />
      </div>

      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input placeholder="jdoe" id="wd-text-fields-username" /> <br/>
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input type="password" defaultValue="123@#$asd" id="wd-text-fields-password"/><br/>

          <h5>Textarea</h5>
          <label>Biography:</label><br/>
          <textarea id="wd-textarea" cols={30} rows={6} defaultValue={"Lorem ipsum dolor sit amet..."}/><br/>

          <h5>Buttons</h5>
          <button type="button" onClick={() => alert("Life is Good!")}>Hello World!</button>

          <h5>Radio</h5>
          <input type="radio" name="radio-genre" id="wd-radio-comedy"/><label htmlFor="wd-radio-comedy">Comedy</label><br/>
          <input type="radio" name="radio-genre" id="wd-radio-drama"/><label htmlFor="wd-radio-drama">Drama</label><br/>

          <h5>Checkboxes</h5>
          <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/><label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

          <h5>Dropdowns</h5>
          <select id="wd-select-one-genre" defaultValue={"SCIFI"}>
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI" >Science Fiction</option>
          </select>
        </form>
      </div>

      <div id="wd-anchor">
        <h4>Anchor tag</h4>
        Please <a href="https://www.lipsum.com" id="wd-lipsum">click here</a> to get dummy text.
      </div>

    </div>
  );
}
