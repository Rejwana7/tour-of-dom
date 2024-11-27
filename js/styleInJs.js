const sections= document.querySelectorAll('section')
for(const section of sections){
    section.style.border ='2px solid steelblue';
    section.style.marginBottom='5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';

}
// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-container')
placesContainer.classList.add('text-center')
placesContainer.classList.remove('large-text')



const placesTitle = document.getElementById('places-title')
placesTitle.classList.add('title-color')
placesContainer.classList.remove('large-text')

const placesContainer1 = document.getElementById('places-container');
console.log(placesContainer.childNodes); 
const ulElement = placesContainer.childNodes[3]; // Access the <ul> directly
// console.log(ulElement);
const placeNodes = Array.from(ulElement.children); // Directly get <li> elements
// console.log(placeNodes);

// const placesUL= document.querySelector('#places-container ul')
// console.log(placesUL)

// const li=document.createElement('li')
// li.innerText="Brand New Place to go"
// console.log(li)


// const placesUL= document.querySelector('#places-container ul')
// if(placesUL){
//     placesUL.appendChild(li);
//     console.log("New <li> added:",li)
// }
// else {
//     console.error("Could not find <ul> inside #places-container");
// }