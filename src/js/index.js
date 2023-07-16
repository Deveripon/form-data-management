const registrationForm = document.getElementById("registration-form");
const photo = document.querySelector("input[name='photo']");
const gPhoto = document.querySelector("input[name='g_photo']");
const profilePreview = document.querySelector("#profile-image-preview");
const galleryImagePreview = document.querySelector("#gallery-image-preview");
let formDataObject;
let photoUrl;
let gallPhotoUrl = [];
let gallImage = "";
registrationForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  formDataObject = Object.fromEntries(formData.entries());
};

//profile photo url
photo.onchange = (e) => {
  let photo = e.target.files[0];
  photoUrl = URL.createObjectURL(photo);
  profilePreview.setAttribute("src", photoUrl);
  profilePreview.style.display = "block";
  console.log(photoUrl);
};

//galllery photo url
gPhoto.onchange = (e) => {
  let photo = e.target.files;
  for (let i = 0; i < photo.length; i++) {
    gallPhotoUrl.push(URL.createObjectURL(photo[i]));
  }

  gallPhotoUrl.map((item, index) => {
    galleryImagePreview.innerHTML += `<img class="w-1/8" style="width:150px; height:150px;object-fit:cover;object-position:top;" src="${item}">`;
  });
  galleryImagePreview.setAttribute(
    "style",
    "display:flex !important;flex-wrap:wrap; max-width:400px !important;"
  );
};
