import React, { useState } from "react";
import "./Login.scss";
import db from "../../server/db.json";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(db.users);

  function userSearchByUsername(username) {
    let usersIndex = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username) {
        usersIndex = i;
        return usersIndex;
      }
    }
    return "Не верный логин";
  }

  function logInAccount(e) {
    e.preventDefault();
    const userIndex = userSearchByUsername(username);
    const user = users[userIndex];
    console.log(userIndex);
    console.log(user);
    user.password == password
      ? console.log("Вошёл")
      : console.log("Не верный пароль!");
  }

  return (
    <section className="login">
      <div className="conteiner">
        <div className="login__inner">
          <h2 className="login__title">Вход</h2>
          <form className="login__form">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="login__form-input"
              placeholder="Логин"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              className="login__form-input"
              placeholder="Пароль"
            />
            <button onClick={logInAccount} className="login__form-btn">
              Войти
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
