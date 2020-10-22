create table users(
userId serial primary key,
username varchar(20),
password varchar(150),
email  varchar(150)
);

create table match(
matchId serial primary KEY
);

create table matchJunction(
userId integer,
matchId integer,
foreign key (userId) references users(userId),
foreign key (matchId) references match(matchId)
);
