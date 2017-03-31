import React, { Component } from 'react';

const Login = (props) => {
  return (
    <div id="login">
      <form>
        <input id="username" type="text" placeholder="Username...">
        <input id="password" type="password" placeholder="Password...">
      </form>
      <button onClick={props.handleClick}>Create Account</button>
    </div>
  );
}