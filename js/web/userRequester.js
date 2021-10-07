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
