import "./index.css";
import Container from "react-bootstrap/Container";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import BootstrapGrids from "./BootstrapGrid";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapList";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";
import BootstrapCards from "./BootstrapCards";
import ReactIcons from "./ReactIcons";

export default function Labs2() { 
  return ( 
    <Container>
      <div id="wd-Labs2"> 
        <h2>Labs 2 - Cascading Style Sheets</h2> 
        <h3>Styling with the STYLE attribute</h3>
     
        <p> 
          Style attribute allows configuring look and feel 
          right on the element. Although it's very convenient 
          it is considered bad practice and you should avoid 
          using the style attribute
        </p>

        {/* ID selectors */}
        <div id="wd-css-id-selectors"> 
          <h3>ID selectors</h3> 
          <p id="wd-id-selector-1"> 
            This is a white text on red background.
          </p> 
          <p id="wd-id-selector-2"> 
            This is black text on yellow background.
          </p> 
        </div> 

        {/* Class selectors */}
        <div id="wd-css-class-selectors"> 
          <h3>Class selectors</h3> 
          <p className="wd-class-selector"> 
            Instead of using IDs to refer to elements, you can use an element's CLASS attribute 
          </p> 
          <h4 className="wd-class-selector"> 
            This heading has same style as paragraph above.
          </h4> 
        </div>

        {/* Document structure selectors */}
        <div id="wd-css-document-structure"> 
          <div className="wd-selector-1"> 
            <h3>Document structure selectors</h3> 
            <div className="wd-selector-2"> 
              Selectors can be combined to refer elements in particular 
              places in the document 
              <p className="wd-selector-3"> 
                This paragraph's red background is referenced as 
                <br /> 
                .selector-2 .selector3<br /> 
                meaning the descendant of some ancestor.<br /> 
                <span className="wd-selector-4"> 
                  Whereas this span is a direct child of its parent 
                </span><br /> 
                You can combine these relationships to create specific  
                styles depending on the document structure 
              </p> 
            </div>
          </div>
        </div>

        {/* Labs components */}
        <div>
          {/* Foreground Colors */}
          <ForegroundColors />
        </div>

        <div>
          {/* Background Colors */}
          <BackgroundColors />
        </div>

        <div>
          {/* Borders */}
          <Borders />
        </div>

        <div>
          {/* Padding */}
          <Padding />
        </div>

        <div>
          {/* Margins */}
          <Margins />
        </div>

        <div>
          {/* Corners */}
          <Corners />
        </div>

        <div>
          {/* Dimensions */}
          <Dimensions />
        </div>

        <div>
          {/* Positions */}
          <Positions />
        </div>

        <div>
          {/* Zindex */}
          <Zindex />
        </div>

        <div>
          {/* Float */}
          <Float />
        </div>

        <div>
          {/* GridLayout */}
          <GridLayout />
        </div>

        <div>
          {/* Flex */}
          <Flex />
        </div>

        <div>
    {/* React Icons */}
      <ReactIcons />
     </div>

        <div>
          {/* Bootstrap Grid */}
          <BootstrapGrids />
        </div>

      
        <div>
         {/* Bootstrap Table */}
          <BootstrapTables /> 
        </div>

        <div>
         {/* Bootstrap List */}
          <BootstrapLists /> 
        </div>
        <div>
         {/* Bootstrap Forms */}
          <BootstrapForms /> 
        </div>
         </div>

         <div>
       {/* Bootstrap Navigation */}
      <BootstrapNavigation />
      </div>

      <div>
    {/* Bootstrap Cards */}
      <BootstrapCards />
     </div>

     


         <div>
          {/* Screen Size Label */}
          <ScreenSizeLabel />
         </div>
         </Container>
  );
}
