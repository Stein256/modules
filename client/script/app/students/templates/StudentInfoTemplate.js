var studentInfoTemplate = `<tbody>
  <tr>
    <th>Name</th>
    <td><%= data.name %></td>
  </tr>
  <tr>
    <th>Surname</th>
    <td><%= data.surname %></td>
  </tr>
  <tr>
    <th>Age</th>
    <td><%= data.age %></td>
  </tr>
  <tr>
    <th>Birthday</th>
    <td><%= data.birthday.toDateString() %></td>
  </tr>
  <tr>
    <th>Gender</th>
    <td><%= data.gender %></td>
  </tr>
  <tr>
    <th>Skype</th>
    <td><%= data.skype %></td>
  </tr>
  <tr>
    <td colspan="2">
      <button class="right close-button">Close</button>
      <button class="right edit-button">Edit</button>
    </td>
  </tr>
</tbody>`;