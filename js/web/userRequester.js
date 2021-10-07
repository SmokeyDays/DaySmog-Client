async function userRegister(name, passwd) {
  const data = {name, passwd};
  const response = await fetch(serverLocation + "/user/register", {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  });
  return await response.text();
}

function userLogin(name, passwd) {
  const data = {name, passwd};
  return fetch(serverLocation + "/user/login", {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  }).then(res => res.json());
}

function userLogout() {
  return fetch(serverLocation + "/user/logout?encryption=" +
  fixedEncodeURIComponent(cookieGetter("session")) + "&userName=" +
  fixedEncodeURIComponent(nowUserName), { method: "POST" }).then(res => {
    nowUserName = "";
    cookieSaver("session", "");
    res.text()
  }).then(res => {
    console.log(res);
  });
}
