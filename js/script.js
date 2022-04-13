'use strict'

document.addEventListener('DOMContentLoaded', function () {

  const mainForm = document.forms.main;
  const popup = document.querySelector('.popup');
  const formInputs = mainForm.querySelectorAll('.form__input');
  const messageErrorFilds = popup.querySelector('.popup__message');
  const messageSuccessSending = popup.querySelector('.popup__success');
  const messageErrorSending = popup.querySelector('.popup__error');
  const formName = mainForm.elements.name;
  const formEmail = mainForm.elements.email;
  const formComment = mainForm.elements.comment;
  const formNamePlaceholder = formName.placeholder;
  const formEmailPlaceholder = formEmail.placeholder;
  const formCommentPlaceholder = formComment.placeholder;
  const button = mainForm.elements.button;

  formInputs.forEach(formInput =>
    formInput.addEventListener('focus', function (e) {
      formInput.placeholder = '';
    }));

  formName.addEventListener('blur', function (e) {
    formName.placeholder = formNamePlaceholder;
  });

  formEmail.addEventListener('blur', function (e) {
    formEmail.placeholder = formEmailPlaceholder;
  })

  formComment.addEventListener('blur', function (e) {
    formComment.placeholder = formCommentPlaceholder;
  });

  mainForm.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let formData = new FormData(mainForm);

    let error = formValidate(mainForm);

    if (error === 0) {
      mainForm.classList.add('_sending');
      
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        messageSuccessSending.classList.add('_successSending');
        formPreview.innerHTML = '';
        mainForm.reset();
        messageSuccessSending.classList.remove('_successSending');
        mainForm.classList.remove('_sending');
        messageErrorFilds.classList.remove('_errorFilds');
      } else {
        messageErrorSending.classList.add('_errorSending');
        mainForm.classList.remove('_sending');
        messageSuccessSending.classList.remove('_successSending');
        messageErrorFilds.classList.remove('_errorFilds');
      }
    } else {
      messageErrorFilds.classList.add('_errorFilds');
      mainForm.classList.remove('_sending');
      messageSuccessSending.classList.remove('_successSending');
    }
  }
  
  function formValidate(mainForm) {
    let error = 0;
    let mainFormReq = document.querySelectorAll('._req');

    for (let index=0; index < mainFormReq.length; index++) {
      const input = mainFormReq[index];
      formRemoveError(input);

      if (input.classList.contains('form__email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
          if (input.value === '') {
            formAddError(input);
            error++;
          }
        }
    }
    return error;
  }
    
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
})



