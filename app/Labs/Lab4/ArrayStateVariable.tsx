'use client';

import { useState } from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function ArrayStateVariable() {
  const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5]);

  const addElement = () =>
    setArray([...array, Math.floor(Math.random() * 100)]);

  const deleteElement = (index: number) =>
    setArray(array.filter((_, i) => i !== index));

  return (
    <div id="wd-array-state-variables" className="w-50">
      <h2 className="bg-light border p-2 text-center">Array State Variable</h2>

      {/* Green Add button */}
      <Button
        variant="success"
        className="mb-2"
        id="wd-add-element-click"
        onClick={addElement}
      >
        Add Element
      </Button>

      {/* List styled with Bootstrap */}
      <ListGroup>
        {array.map((item, index) => (
          <ListGroupItem
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <span>{item}</span>
            <Button
              variant="danger"
              id="wd-delete-element-click"
              onClick={() => deleteElement(index)}
            >
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>

      <hr />
    </div>
  );
}
