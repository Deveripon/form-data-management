//validation alert message
function getAlert(text, type) {
  return `
    <div class="uk-alert-${type}" uk-alert>
       <a class="uk-alert-close" uk-close></a>
       <p>${text}</p>
    </div>
`;
}

//cell number verification
function cellValidation(cell) {
  const pattarn = /(01|\+8801|8801)[0-9]{9}/;
  return pattarn.test(cell);
}

//email verification
function emailValidation(email) {
  const pattarn = /^[a-z0-9\._]*@[a-z0-9]{1,}\.[a-z0-9]{1,9}/;
  return pattarn.test(email);
}
