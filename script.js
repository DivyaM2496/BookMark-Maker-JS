// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarkForm = document.getElementById("bookmarkForm");

let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");

let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");

let bookmarksList = document.getElementById("bookmarksList");

let sitename;
let siteurl;
let isValid = true;

function addNameUrl(name, url) {
    let bookmark = document.createElement("li");
    bookmark.classList.add("list-styles", "d-flex", "flex-column");



    let title = document.createElement("p");
    title.textContent = name;



    let newurl = document.createElement("a");
    newurl.textContent = url;
    newurl.href = url;
    newurl.target = "_blank";

    bookmark.appendChild(title);
    bookmark.appendChild(newurl);

    bookmarksList.appendChild(bookmark);
}

function validateName(event) {

    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
        isValid = false;
    } else {
        siteNameErrMsg.textContent = "";

    }
}

function validateUrl(event) {
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
        isValid = false;
    } else {
        siteUrlErrMsg.textContent = "";
    }
}

siteNameInput.addEventListener("change", function(event) {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});
siteUrlInput.addEventListener("change", function(event) {
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateName();
    validateUrl();
    if (isValid) {
        addNameUrl(siteNameInput.value, siteUrlInput.value);
        siteNameInput.value = "";
        siteUrlInput.value = "";
    }


});
