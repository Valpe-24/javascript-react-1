import React from "react";

export const FootBook = () => {
  return (
    <div className="Posts">
      <h2>Posts</h2>
      <table>
        <tr>
          <td>6/8/2022</td>
          <td>Hello World!!!</td>
        </tr>
        <tr>
          <td>6/9/2022</td>
          <td>I think therefore I am.</td>
        </tr>
        <tr>
          <td>09/12/2022</td>
          <td>I need to retire.</td>
        </tr>
      </table>

      <h2>Groups</h2>
      <table>
        <tr>
          <td>Likes: </td>
          <td>12</td>
          <td>Cats</td>
        </tr>
        <tr>
          <td>Likes: </td>
          <td>2</td>
          <td>Dogs</td>
        </tr>
        <tr>
          <td>Likes: </td>
          <td>0</td>
          <td>Good Neighbors</td>
        </tr>
      </table>

    </div>
  );
};
