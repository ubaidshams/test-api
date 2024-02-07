import React from "react";
import styles from "./form.module.css";

const Tabel = () => {
  return (
    <div className={styles.tabelBlock}>
      <h2>Tabel</h2>
      <table>
        <thead>
          <tr>
            <th>Issue Key</th>
            <th>Issue Summary</th>
            <th>Issue Status</th>
            <th>Linked Issue Key</th>
            <th>Linked Issue Summary</th>
            <th>Linked Issue Status</th>
            <th>Linked Issue Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Issue Key</td>
            <td>Issue Summary</td>
            <td>Issue Status</td>
            <td>Linked Issue Key</td>
            <td>Linked Issue Summary</td>
            <td>Linked Issue Status</td>
            <td>Linked Issue Type</td>
          </tr>
          <tr>
            <td>Issue Key</td>
            <td>Issue Summary</td>
            <td>Issue Status</td>
            <td>Linked Issue Key</td>
            <td>Linked Issue Summary</td>
            <td>Linked Issue Status</td>
            <td>Linked Issue Type</td>
          </tr>
          <tr>
            <td>Issue Key</td>
            <td>Issue Summary</td>
            <td>Issue Status</td>
            <td>Linked Issue Key</td>
            <td>Linked Issue Summary</td>
            <td>Linked Issue Status</td>
            <td>Linked Issue Type</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;
