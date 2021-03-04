import React from "react";

const TodoList = () => {
  return (
    <div className="todo-container">
      <h3>Garden Tasks</h3>
      <table>
        <thead>
          <th></th>
          <th>Task</th>
          <th>Notes</th>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Buy honeysuckle</td>
            <td>Decide which variety to get</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
