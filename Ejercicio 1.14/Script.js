const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: false},
    {username: 'sergio58', age: 26, premium: true}
  ];
  const usersPremium = users.filter(user => user.premium);

  console.log ("Estos son los usuarios premium",usersPremium);

  const usersNopremium = users.filter(user =>!user.premium);
  console.log (usersNopremium)