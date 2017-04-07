var studentEditTemplate = `<tbody>
  <tr>
    <th>Name</th>
    <td>
      <input type="text" name="name" placeholder="<%= data.name %>">
    </td>
  </tr>
  <tr>
    <th>Surname</th>
    <td>
      <input type="text" name="surname" placeholder="<%= data.surname %>">
    </td>
  </tr>
  <tr>
    <th>Birthday</th>
    <td>
      <input type="text" name="birthday" placeholder="<%= data.birthday.toDateString() %>">
    </td>
  </tr>
  <tr>
    <th>Gender</th>
    <td>
      <input type="text" name="gender" placeholder="<%= data.gender %>">
    </td>
  </tr>
  <tr>
    <th>Skype</th>
    <td>
      <input type="text" name="skype" placeholder="<%= data.skype %>">
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <button class="right close-button">Close</button>
      <button class="right save-button">Save</button>
    </td>
  </tr>
</tbody>`;