import {initializeApp} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {getFirestore, collection, getDocs, addDoc,deleteDoc,doc,onSnapshot} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
const formElement = document.getElementById("postituseVorm")
const isAdmin = document.title

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiyoOeGKsyYviGjVxOtewHYcC9yIxX28M",
    authDomain: "javascript-8d304.firebaseapp.com",
    projectId: "javascript-8d304",
    storageBucket: "javascript-8d304.firebasestorage.app",
    messagingSenderId: "47829478557",
    appId: "1:47829478557:web:ca292a1bbb81c5311bb874",
    measurementId: "G-2EP1B2YSFN"
  };

initializeApp(firebaseConfig);
const db = getFirestore();

const kogumik = collection(db, "kommentaarid");



onSnapshot(kogumik, (snapshot)=>{
    const postitusedElement = document.getElementById('postitused');

    postitusedElement.innerHTML = '';
    let totalComs = 0
    let totalStars = 0
    snapshot.docs.forEach(dok => {
        const data = dok.data();
        const card = document.createElement('div');
        const rating = parseInt(data.rating)
        card.className = 'card mb-3';
        card.innerHTML = `
            <div class="card-body">
                <p class="card-text">${data.kommentaar}</p>
                <p class="card-text">${new Date(data.aeg.seconds * 1000).toLocaleDateString()}</p>
            </div>
        `;
        postitusedElement.appendChild(card);


        const crating = document.createElement("div")
        crating.style = "margin-left:15px"
        for(let i = 0;i<rating;i++){
            crating.innerHTML += `<span class = "fa fa-star checked"></span>`
        }
        card.appendChild(crating);
        if(isAdmin == "Admin"){
            const totalTag = document.getElementById("total")
            const ratingTag = document.getElementById("rating")
            const deleteBtn = document.createElement("button")
            deleteBtn.classList = "btn btn-danger btn-sm"
            deleteBtn.innerHTML = "Kustuta kommentaar"
            deleteBtn.dataset.id = `${dok.id}`
            card.querySelector(".card-body").appendChild(deleteBtn)

            totalComs  +=1
            totalStars += rating
            ratingTag.innerHTML = `${Math.round(totalStars/totalComs).toFixed(2)}`
            totalTag.innerHTML = `${totalComs}`
        }
    });
})

function AdminPanel(){
    document.getElementById('postitused').addEventListener('click', e => {
        e.preventDefault();
        if (e.target.tagName === "BUTTON"){
            const id = e.target.dataset.id;

            const isConfirmed = confirm('Kas olete kindel, et soovite selle kommentaari kustutada?');
            if (isConfirmed) {
                deleteDoc(doc(db, 'kommentaarid', id))
                .then(()=>{
                    console.log(`ID ${id} kustutatud`);
                })
                .catch(err => {
                    console.log(err);
                });
            }
        }
    });
}

function starsSet(){
    const stars = document.querySelectorAll(".fa")
    for(let i = 0;i<stars.length;i++){
        stars[i].addEventListener("mouseover",e=>{
            const n = i
            for(let j = n;j>-1;j--){
                if(!stars[j].classList.contains("checked")){
                    stars[j].classList.replace("unchecked","checked")
                }
            }
           for(let k = n+1;k<5;k++){
                if(stars[k].classList.contains("checked")){
                    stars[k].classList.replace("checked","unchecked")
                }
            }
            formElement.dataset.stars = n+1
        });
    }
}
if (document.title != "Admin"){
    starsSet()
    formElement.addEventListener('submit', e => {
        e.preventDefault();
        let starRating = e.target.dataset.stars
        let Kommentaar = tekst.value
        addDoc(kogumik, {
            aeg: new Date(),
            kommentaar: Kommentaar,
            rating:starRating
        })
            .then(() => {
                console.log("Andmed lisatud");
                formElement.reset();
            })
            .catch(err => {
                console.log(err);
            });
    });
}
else{
    AdminPanel()
}
