import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import InputGroupText from "react-bootstrap/InputGroupText";

export default function BootstrapForms() {
  return (
    <div className="my-4">
      {/* ✅ Basic form controls */}
      <div id="wd-css-styling-forms">
        <h2>Forms</h2>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </div>

      {/* ✅ Dropdown */}
      <div id="wd-css-styling-dropdowns" className="mt-4">
        <h3>Dropdowns</h3>
        <Form.Select>
          <option value="0" defaultChecked>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>

      {/* ✅ Switches */}
      <div id="wd-css-styling-switches" className="mt-4">
        <h3>Switches</h3>
        <Form.Check type="switch" defaultChecked={false} label="Unchecked switch" />
        <Form.Check type="switch" defaultChecked={true} label="Checked switch" />
        <Form.Check type="switch" defaultChecked={false} label="Disabled unchecked" disabled />
        <Form.Check type="switch" defaultChecked={true} label="Disabled checked" disabled />
      </div>

      {/* ✅ Range */}
      <div id="wd-css-styling-range-and-sliders" className="mt-4">
        <h3>Range</h3>
        <Form.Label>Example range</Form.Label>
        <Form.Range min="0" max="5" step="0.5" />
      </div>

      {/* ✅ Input Addons */}
      <div id="wd-css-styling-addons" className="mt-4">
        <h3>Addons</h3>
        <InputGroup className="mb-3">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>0.00</InputGroupText>
          <Form.Control />
        </InputGroup>
        <InputGroup>
          <Form.Control />
          <InputGroupText>$</InputGroupText>
          <InputGroupText>0.00</InputGroupText>
        </InputGroup>
      </div>

      {/* ✅ Responsive Forms 1 */}
      <div id="wd-css-responsive-forms-1" className="mt-4">
        <h3>Responsive forms</h3>
        <Row className="mb-3">
          <Form.Label column sm={2}> Email </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" defaultValue="email@example.com" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Label column sm={2}> Password </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="password" />
          </Col>
        </Row>
      </div>

      {/* ✅ Responsive Forms 2 */}
      <div id="wd-css-responsive-forms-2" className="mt-4">
        <h3>Responsive forms 2</h3>
        <Form>
          <Row className="mb-3">
            <Form.Label column sm={2}> Email </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label column sm={2}> Password </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Row>
          <fieldset>
            <Row className="mb-3">
              <Form.Label as="legend" column sm={2}> Radios </Form.Label>
              <Col sm={10}>
                <Form.Check type="radio" label="First radio" name="formHorizontalRadios" defaultChecked />
                <Form.Check type="radio" label="Second radio" name="formHorizontalRadios" />
                <Form.Check type="radio" label="Third radio" name="formHorizontalRadios" />
                <Form.Check type="radio" label="Remember me" name="formHorizontalRadios" />
              </Col>
            </Row>
          </fieldset>
          <Col>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form>
      </div>
    </div>
  );
}
