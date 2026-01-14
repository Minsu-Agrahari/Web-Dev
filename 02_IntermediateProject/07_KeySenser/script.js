const insert = document.querySelector('.insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
        <div class ='color'>
        <table border="1" cellspacing="10" cellpadding="10" padding='10px'>
        <tr>
            <th>__key__</th>
            <th>__keyCode__   </th>
            <th>__Code__</th>
        </tr>

        <tr>
            <td>${event.key === ' '? 'Space':event.key}</td>
            <td>${event.keyCode}</td>
            <td>${event.code}</td>
        </tr>
        </table>
        </div>
    `;
});
