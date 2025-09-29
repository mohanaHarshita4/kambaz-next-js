export default function Modules() {
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button>Collapse All</button>
        <button>View Progress</button>
        <button>Publish All</button>
        <button>+ Module</button>
      </div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">CSS Basics</li>
                <li className="wd-content-item">Selectors, properties, and values</li>
                <li className="wd-content-item">Layout: Flexbox and Grid</li>
                <li className="wd-content-item">Responsive Design</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">JavaScript Fundamentals</li>
                <li className="wd-content-item">Variables, data types, and operators</li>
                <li className="wd-content-item">Functions and control flow</li>
                <li className="wd-content-item">DOM Manipulation and Events</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}