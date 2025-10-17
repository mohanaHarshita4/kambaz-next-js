import "./index.css";
export default function Borders() {
  return (
    <div id="wd-borders" className="mb-4">
      <h2>Borders</h2>
      <div className="wd-border-fat wd-border-red wd-border-solid p-2 mb-3">
        Fat red solid border
      </div>
      <div className="wd-border-thin wd-border-blue wd-border-dashed p-2">
        Thin blue dashed border
      </div>
    </div>
  );
}
