const form = document.getElementById('form');
const inputNama = document.getElementById('nama');
const inputUmur = document.getElementById('umur');
const inputPekerjaan = document.getElementById('pekerjaan');

const postData = (url, data) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (e) {
      console.log(`Error: ${e}`);
    });
};

const getData = () => {
  fetch('https://sheet.best/api/sheets/159e9cac-caa4-467d-928f-45c185ef0ade')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach((d, number) => {
        let dataHTML = '';
        number++;

        dataHTML += `
            <tr>
                <td>
                    ${number}
                </td>
                <td>
                    ${d.nama}
                </td>
                <td>
                    ${d.umur}
                </td>
                <td>
                    ${d.pekerjaan}
                </td>
            </tr>
          `;

        document.getElementById('tabel-data').innerHTML += dataHTML;
      });
    });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let data = {
    nama: inputNama.value,
    umur: inputUmur.value,
    pekerjaan: inputPekerjaan.value,
  };

  postData(
    'https://sheet.best/api/sheets/159e9cac-caa4-467d-928f-45c185ef0ade',
    data
  );

  inputNama.value = '';
  inputUmur.value = '';
  inputPekerjaan.value = '';
});
