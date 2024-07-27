const fs = require("fs/promises");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    const html = renderUsers(data);
    return fs.writeFile("main.html", `<head>
        <title>Title</title>
      </head>
      <body>
        ${html}
        <script>
          alert("Hello node js")
        </script>
      </body> `,);
  })
  .catch((err) => console.log(err));

function renderUsers(users) {
  let htmlString = "";
  users.forEach((user) => {
    const { id, name, username, email, address, phone, website } = user;
    htmlString += `
            <div>
                <p>${id}</p>
                <p>${name}</p>
                <p>${username}</p>
                <p>${email}</p>
                <p>${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}</p>
                <p>${phone}</p>
                <p>${website}</p>
            </div>
            `;
  });
  return htmlString;
}
