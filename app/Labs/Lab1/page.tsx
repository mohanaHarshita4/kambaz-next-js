"use client";

import images from "next/images";

export default function Labs1() {
  return (
    <div id="wd-Labs1">
      <h2>Labs 1</h2>
      <h3>HTML Examples</h3>

      {/* Heading exercise */}
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and subsections.
        Each section is usually prefaced with a short title or heading...
      </div>

      {/* Paragraph exercise */}
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is a paragraph. We often separate a long set of sentences with
          vertical spaces to make the text easier to read.
        </p>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>

      {/* Lists exercise */}
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>

        My favorite recipe: Coffe
        <ol id="wd-your-favorite-recipe">
          <li>Grind coffe beans</li>
          <li>Boil Milk</li>
          <li>Add sugar in a cup</li>
          <li>Pour milk and add coffe powder</li>

        </ol>
      </div>

      {/* Unordered Lists exercise */}
      <div id="wd-unordered-lists">
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order):
        <ul id="wd-my-books">
          <li>Twilight</li>
          <li>Jane Austin</li>
          <li>Ender&apos;s Game</li>
          <li>Where it all began</li>
        </ul>

        Your favorite books (in no particular order):
        <ul id="wd-your-books">
          <li>Tomorrow will never come</li>
          <li>Let us see</li>
          <li>La LA Land</li>
        </ul>
      </div>

      {/* Table exercise */}
      <div id="wd-Labs1">
      <h2>Labs 1</h2>
      <h3>HTML Examples</h3>

      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>88</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>React</td>
              <td>2/24/21</td>
              <td>92</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>Node.js</td>
              <td>3/3/21</td>
              <td>87</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>Express</td>
              <td>3/10/21</td>
              <td>91</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>MongoDB</td>
              <td>3/17/21</td>
              <td>89</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>APIs</td>
              <td>3/24/21</td>
              <td>93</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Deployment</td>
              <td>3/31/21</td>
              <td>95</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

      {/* images exercise */}
      <div id="wd-images">
        <h4>images Tag</h4>
        <h5>Remote images</h5>
        <images
          id="wd-starship"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          width={400}
          height={250}
          alt="SpaceX Starship prototype"
        />

        <h5>Local images</h5>
        <images
          id="wd-tesLabsot"
          src="/images/tesLabsot.jpg"
          width={200}
          height={200}
          alt="Tesla humanoid robot"
        />
      </div>

      <table border={1}>
  <thead>
    <tr>
      <th>Q</th>
      <th>Date</th>
      <th>Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Q3</td><td>2024-09-01</td><td>95</td></tr>
    <tr><td>Q4</td><td>2024-09-05</td><td>87</td></tr>
    <tr><td>Q5</td><td>2024-09-10</td><td>92</td></tr>
  </tbody>
</table>



      {/* Forms exercise */}
      <div id="wd-forms">
  <h4>Form Elements</h4>
  <form id="wd-text-fields">
    <h5>Text Fields</h5>
    <Label htmlFor="wd-text-fields-username">Username:</Label>
    <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
    <Label htmlFor="wd-text-fields-password">Password:</Label>
    <input type="password" defaultValue="123@#$asd"
           id="wd-text-fields-password" /><br />
    <Label htmlFor="wd-text-fields-first-name">First name:</Label>
    <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
    <Label htmlFor="wd-text-fields-last-name">Last name:</Label>
    <input type="text" placeholder="Doe"
           defaultValue="Wonderland"
           title="The last name"
           id="wd-text-fields-last-name" />
    {/* copy rest of form elements here  */}
  </form>


        <h5>Text boxes</h5>
<Label>Biography:</Label><br/>
<textarea
  id="wd-textarea"
  cols={30}
  rows={10}
  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labsore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Labsoris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est Labsorum."
/>



        <h5 id="wd-buttons">Buttons</h5>
<button type="button"
        onClick={() => alert("Life is Good!")}
        id="wd-all-good">
  Hello World!
</button>

<h5 id="wd-radio-buttons">Radio buttons</h5>

<Label>Favorite movie genre:</Label><br />

<input type="radio" name="radio-genre" id="wd-radio-comedy"/>
<Label htmlFor="wd-radio-comedy">Comedy</Label><br />

<input type="radio" name="radio-genre" id="wd-radio-drama"/>
<Label htmlFor="wd-radio-drama">Drama</Label><br />

<input type="radio" name="radio-genre" id="wd-radio-scifi"/>
<Label htmlFor="wd-radio-scifi">Science Fiction</Label><br />
<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
<Label htmlFor="wd-radio-fantasy">Fantasy</Label>

        <h5 id="wd-checkboxes">Checkboxes</h5>
<Label>Favorite movie genre:</Label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
<Label htmlFor="wd-chkbox-comedy">Comedy</Label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
<Label htmlFor="wd-chkbox-drama">Drama</Label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
<Label htmlFor="wd-chkbox-scifi">Science Fiction</Label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
<Label htmlFor="wd-chkbox-fantasy">Fantasy</Label>



        {/* Dropdowns exercise */}
        <h4>Dropdowns</h4>
        <h5>Select one</h5>
        <Label htmlFor="wd-select-one-genre">Favorite movie genre:</Label><br />
        <select id="wd-select-one-genre" defaultValue="SCIFI">
          <option value="COMEDY">Comedy</option>
          <option value="DRAMA">Drama</option>
          <option value="SCIFI">Science Fiction</option>
          <option value="FANTASY">Fantasy</option>
        </select>

        <h5>Select many</h5>
        <Label htmlFor="wd-select-many-genre">Favorite movie genres:</Label><br />
        <select id="wd-select-many-genre" multiple defaultValue={["COMEDY", "SCIFI"]}>
          <option value="COMEDY">Comedy</option>
          <option value="DRAMA">Drama</option>
          <option value="SCIFI">Science Fiction</option>
          <option value="FANTASY">Fantasy</option>
        </select>

        <h4>Other HTML field types</h4>

<Label htmlFor="wd-text-fields-email"> Email: </Label>
<input type="email"
       placeholder="jdoe@somewhere.com"
       id="wd-text-fields-email"/><br/>

<Label htmlFor="wd-text-fields-salary-start"> Starting salary:</Label>
<input type="number"
       defaultValue="100000"
       placeholder="1000"
       id="wd-text-fields-salary-start"/><br/>

<Label htmlFor="wd-text-fields-rating"> Rating: </Label>
<input type="range"
       defaultValue="4"
       max="5"
       placeholder="Doe"
       id="wd-text-fields-rating"/><br/>

<Label htmlFor="wd-text-fields-dob"> Date of birth: </Label>
<input type="date"
       defaultValue="2000-01-21"
       id="wd-text-fields-dob"/><br/>

        {/* Anchor tags */}
        <h4>Anchor tag</h4>
        Please <a href="https://www.lipsum.com" id="wd-lipsum">click here</a> to get dummy text.<br />
        
        
        <h4>Anchor tag</h4>
        Visit my 
         <a href="https://github.com/mohanaHarshita4/kambaz-next-js" id="wd-github">GitHub Repo</a>
      </div>
    </div>
  );
} 