class Api {
    constructor(options) {
      this._url = options.baseUrl;
      this._headers = options.headers;
      this._authorization = options.headers.authorization;
    }

    _checkRes(res) {
        return res.ok 
        ? res.json() 
        : Promise.reject
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkRes)
      }

    getInfo() {
        return this._request(`${this._url}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
    }

    getCards() {
        return this._request(`${this._url}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
    }

    setInfoProfile(data) {
        return this._request(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                about: data.subtitle,
            })
        })
    }

    setInfoAvatar(data) {
        return this._request(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.editAvatar,
            })
        })
    }

    addNewCard(data){
        return this._request(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.placeName,
                link: data.placeSrc,
            })
        })
    }

    addLike(cardID) {
        return this._request(`${this._url}/cards/${cardID}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization,
            }
        })
    }

    deleteLike(cardID) {
        return this._request(`${this._url}/cards/${cardID}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
            }
        })
    }

    deleteCardID(cardID) {
        return this._request(`${this._url}/cards/${cardID}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
            }
        })
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-77',
    headers: {
      authorization: '980f7983-d65e-4e45-9077-8ccb5ac74fe6',
      'Content-Type': 'application/json'
    }
  }); 

export default api;