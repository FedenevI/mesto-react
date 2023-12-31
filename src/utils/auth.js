class Auth {
    constructor({ url }) {
      this._url = url;
    }
  
    _checkRes(res) {
            if(res.ok) {
              return res.json()
            }
            throw new Error('ошибка!')
    }
  
    registration(email, password) {
      return fetch(`${this._url}/signup`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
      })
        .then(this._checkRes)
    }
  
    Login(email, password) {
      return fetch(`${this._url}/signin`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
      })
        .then(this._checkRes)
    }
  
    checkToken(jwt) {
      return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${jwt}`
        }
      })
        .then(this._checkRes);
    }
  }
  
  export const auth = new Auth({
    url: "https://auth.nomoreparties.co"
  });

 