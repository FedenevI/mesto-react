import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import PopupWithForm from "./PopupWithForm/PopupWithForm";
import ImagePopup from "./ImagePopup/ImagePopup";
import { useState } from "react";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);
  const [openImage, setOpenImage] = useState(false);
  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setOpenImage(false);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function HadleCardOpen(card) {
    setSelectedCard(card);
    setOpenImage(true);
  }

  return (
<>
  <div className="page">
    {/* Header start */}
    <Header />
    {/* Header end */}
    <Main 
      onEditProfile = {handleEditProfileClick}
      onAddPlace = {handleAddPlaceClick}
      onEditAvatar = {handleEditAvatarClick}
      onCardOpen = {HadleCardOpen}
    />
    {/* Footer start */}
    <Footer />
    {/* Footer start */}
  </div>

  <PopupWithForm 
    name='edit-profile'
    title='Редактировать Профиль'
    isOpen={isEditProfilePopupOpen}
    isClose={closeAllPopups}
    > 
    <label className="popup__input-box">
      <input
        id="profile-name"
        minLength={2}
        maxLength={40}
        type="text"
        required=""
        name="title"
        className="popup__input popup__input_type_name"
        placeholder="Имя"
      />
      <span className="popup__input-error profile-name-error" />
    </label>
    <label className="popup__input-box">
      <input
        id="profile-job"
        minLength={2}
        maxLength={200}
        type="text"
        required=""
        name="subtitle"
        className="popup__input popup__input_type_job"
        placeholder="Профессия"
      />
      <span className="popup__input-error profile-job-error" />
    </label>
  </PopupWithForm>

  <PopupWithForm 
  name='popup-card'
  title='Новое место'
  titleBtn='Создать'
  isOpen={isAddPlacePopupOpen}
  isClose={closeAllPopups}
  >
    <label className="popup__input-box">
          <input
            id="place-name"
            minLength={2}
            maxLength={30}
            required=""
            type="text"
            name="placeName"
            className="popup__input popup__input-title"
            placeholder="Название"
          />
          <span className="popup__input-error place-name-error" />
        </label>
        <label className="popup__input-box">
          <input
            id="place-src"
            type="url"
            name="placeSrc"
            required=""
            className="popup__input popup__input-image"
            placeholder="Ссылка на картинку"
          />
          <span className="popup__input-error place-src-error" />
        </label>
  </PopupWithForm>

  <PopupWithForm 
  name='popup-avatar'
  title='Обновить аватар'
  isOpen={isEditAvatarPopupOpen}
  isClose={closeAllPopups}
  >
    <label className="popup__input-box">
          <input
            id="editAvatar"
            type="url"
            name="editAvatar"
            required=""
            className="popup__input popup__input-image"
            placeholder="Ссылка на картинку"
          />
          <span className="popup__input-error editAvatar-error" />
        </label>
  </PopupWithForm>
  
  <PopupWithForm 
   name='popup-delete'
   title='Вы уверены?'
   titleBtn='да'
   />

  <ImagePopup card={selectedCard} isOpen={openImage} isClose={closeAllPopups}/>



  {/* Pop-up profile start */}
  <div className="popup popup-profile">
    <div className="popup__container">
      <h2 className="popup__title">Редактировать профиль</h2>
      <form
        action="name"
        name="edit-profile"
        id="edit-profile"
        className="popup__form popup-profile__form"
        noValidate=""
      >
        <label className="popup__input-box">
          <input
            id="profile-name"
            minLength={2}
            maxLength={40}
            type="text"
            required=""
            name="title"
            className="popup__input popup__input_type_name"
            placeholder="Имя"
          />
          <span className="popup__input-error profile-name-error" />
        </label>
        <label className="popup__input-box">
          <input
            id="profile-job"
            minLength={2}
            maxLength={200}
            type="text"
            required=""
            name="subtitle"
            className="popup__input popup__input_type_job"
            placeholder="Профессия"
          />
          <span className="popup__input-error profile-job-error" />
        </label>
        <button
          type="submit"
          className="popup__button popup__save-button popup__button_disabled"
          aria-label="сохранить"
        >
          Сохранить
        </button>
      </form>
      <button
        className="popup__close-button popup__close-profile"
        type="button"
        aria-label="закрыть"
      />
    </div>
  </div>
  {/* Pop-up profile end */}
  {/* Pop-up card start */}
  <div className="popup popup-card">
    <div className="popup__container">
      <h2 className="popup__title">Новое место</h2>
      <form
        name="edit-profile"
        className="popup__form popup-card__form"
        noValidate=""
      >
        <label className="popup__input-box">
          <input
            id="place-name"
            minLength={2}
            maxLength={30}
            required=""
            type="text"
            name="placeName"
            className="popup__input popup__input-title"
            placeholder="Название"
          />
          <span className="popup__input-error place-name-error" />
        </label>
        <label className="popup__input-box">
          <input
            id="place-src"
            type="url"
            name="placeSrc"
            required=""
            className="popup__input popup__input-image"
            placeholder="Ссылка на картинку"
          />
          <span className="popup__input-error place-src-error" />
        </label>
        <button
          type="submit"
          className="popup__button popup__save-button popup__button_disabled"
          aria-label="сохранить"
        >
          Создать
        </button>
      </form>
      <button
        className="popup__close-button popup__close-card"
        type="button"
        aria-label="закрыть"
      />
    </div>
  </div>
  {/* Pop-up card end */}
  {/* Pop-up AVATAR */}
  <div className="popup popup-avatar">
    <div className="popup__container">
      <h2 className="popup__title">Обновить аватар</h2>
      <form
        name="editAvatar"
        className="popup__form popup-avatar__form"
        noValidate=""
      >
        <label className="popup__input-box">
          <input
            id="editAvatar"
            type="url"
            name="editAvatar"
            required=""
            className="popup__input popup__input-image"
            placeholder="Ссылка на картинку"
          />
          <span className="popup__input-error editAvatar-error" />
        </label>
        <button
          type="submit"
          className="popup__button popup__save-button popup__button_disabled popup__button_avatar"
          aria-label="сохранить"
        >
          Сохранить
        </button>
      </form>
      <button
        className="popup__close-button popup__close-card"
        type="button"
        aria-label="закрыть"
      />
    </div>
  </div>
  {/* Pop-up AVATAR END*/}
  {/* pop-up delete */}
  <div className="popup popup-delete" >
    <div className="popup__container">
      <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
      <form
        name="deleteCard"
        className="popup__form popup-delete__form"
        noValidate=""
      >
        <button
          type="submit"
          className="popup__button popup__delete-button popup__button_disabled"
          aria-label="сохранить"
        >
          да
        </button>
      </form>
      <button
        className="popup__close-button popup__close-card"
        type="button"
        aria-label="закрыть"
      />
    </div>
  </div>
  <div className="popup popup-image">
    <div className="popup-image__wrapper">
      <button
        type="button"
        className="popup__close-button"
        aria-label="Закрыть"
      />
      <img className="popup-image__container" src="#" alt="#" />
      <p className="popup-image__name" />
    </div>
  </div>
</>

  );
}

export default App;
