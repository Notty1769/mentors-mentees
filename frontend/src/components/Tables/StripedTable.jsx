import React from 'react'
import { Card, Table } from "react-bootstrap";

export default function StripedTable() {
  return (
    <div class="container mt-3  ">
    <Card  style={{ backgroundColor: "#212529" }} >
      <Card.Body>
        <Card.Title style={{ color: "white" }}>Striped Table</Card.Title>

        <Table striped variant="dark">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </div>

  )
}



