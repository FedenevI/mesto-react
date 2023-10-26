import { useEffect, useState } from "react"
import api from "../../utils/api";
import Card from "../Card/Card";

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardOpen}) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([dataUser, dataCard]) => {
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);
        dataCard.forEach(element => element.meID = dataUser._id);
        setCards(dataCard);
      })
  }, [])

    return(
        <main className="main">
      {/* Profile start */}
      <section className="profile">
        <div className="profile__items">
          <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
            <img
              src={userAvatar}
              alt="аватар пользователя"
              className="profile__avatar"
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="редактированить профиль"
              onClick={onEditProfile}
            />
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="добавить карточку"
          onClick={onAddPlace}
        />
      </section>
      {/* Profile end */}
      {/* Elements start */}
      <section className="elements">
        
          {cards.map(element => {
            return(
            <div id="place-template" key={element._id}> 
            <Card card={element} onCardOpen={onCardOpen}/>
            </div>
            )
          })}
        
       
      </section>
      {/* Elements start */}
    </main>
    )
}