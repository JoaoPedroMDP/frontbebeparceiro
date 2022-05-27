/* eslint-disable */
export default function ({ store, redirect, auth }) {
  console.log(store.state)
  if (store.state.authenticated === false) {
    console.log(store.state)
    return redirect('/login')
  } else {
    console.log('Está logado')
  }
}
