

// 1. where to add
const placesList = document.getElementById('places-list');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
li.classList.add('important-places')
// 3. add the child
placesList.appendChild(li);

// 1. where to add

const mainContainer=document.getElementById('main-container')
// 2. what to be added

const section= document.createElement('section');
section.style.border ='2px solid steelblue';
    section.style.marginBottom='5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';

    const h1 = document.createElement('h1');
    h1.innerText = 'My Food List';

    section.appendChild(h1);
    section.classList.add('text-center')
    
const ul=document.createElement('ul')
const li1=document.createElement('li')
li1.innerText='biryani' 
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText ='borhani' 
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText ='salad' 
ul.appendChild(li3);
section.appendChild(ul)    

mainContainer.appendChild(section)


// set innerHTML directly
const sectionDress=document.createElement('section')
sectionDress.innerHTML=`
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando genji</li>
</ul>
`
sectionDress.style.border ='2px solid steelblue';
    sectionDress.style.marginBottom='5px';
    sectionDress.style.borderRadius = '15px';
    sectionDress.style.paddingLeft = '7px';
    sectionDress.style.backgroundColor = 'lightgray';
    sectionDress.classList.add('text-center')
mainContainer.appendChild(sectionDress);