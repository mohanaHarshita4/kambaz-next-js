import "./index.css";
export default function BackgroundColors() {
  return (
    <div id="wd-background-colors" className="mb-4">
      <h2>Background Colors</h2>
      <h3 className="wd-bg-color-blue wd-fg-color-white">White on blue heading</h3>
      <p className="wd-bg-color-red wd-fg-color-black">Black on red paragraph</p>
      <span className="wd-bg-color-green wd-fg-color-white p-2">
        White on green span
      </span>
    </div>
  );
}

