const insert = document.getElementById('insert');
window.addEventListener('keydown',(evt)=>{
    insert.innerHTML =`
    <div class="color">
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${evt.key === ' '?'space':evt.key}</td>
    <td>${evt.keyCode}</td>
    <td>${evt.code}</td>
  </tr>
</table>
</div>
    `;
});