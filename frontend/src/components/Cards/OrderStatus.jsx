import React, { useState } from "react";
import { Card, Table, Form, Badge } from "react-bootstrap";

const OrderStatus = () => {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <Card style={{ background: "black" }}>
        <Card.Body>
          <Card.Title style={{ color: "white" }}>Order Status</Card.Title>
          <Table variant="dark">
            <thead>
              <tr>
                <th>
                  <Form.Check
                    type="checkbox"
                    id="selectAllCheckbox"
                    label="All"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th> Client Name </th>
                <th> Order No. </th>
                <th> Product Cost </th>
                <th> Project </th>
                <th> Payment Mode </th>
                <th> Start Date </th>
                <th> Payment Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Form.Check type="checkbox" />
                </td>
                <td>
                  <div>Henry Klien</div>{" "}
                </td>
                <td> 02312 </td>
                <td> $14,500 </td>
                <td> Dashboard </td>
                <td> Credit Card </td>
                <td> 04 Dec 2019</td>
                <td>
                  <Badge variant="success">Approved</Badge>
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderStatus;
