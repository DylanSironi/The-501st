insert into users (
    username,
    password,
    email
) values (
    ${username},
    ${hash},
    ${email}
)
returning userId, username;