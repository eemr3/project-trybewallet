import React from 'react';

import './Table.css';

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
          <th>Country</th>
          <th>Country</th>
          <th>Country</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Mexico</td>
          <td>Mexico</td>
          <td>Mexico</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
          <td>Austria</td>
          <td>Austria</td>
          <td>Austria</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
          <td>UK</td>
          <td>UK</td>
          <td>UK</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
          <td>Canada</td>
          <td>Canada</td>
          <td>Canada</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
          <td>Italy</td>
          <td>Italy</td>
          <td>Italy</td>
          <td>Italy</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
