
let clientCountExternal = document.getElementById("clientCountExternal");

async function fetchAndDisplayCount(){
 try{
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let clients = await response.json();

  let clientCount = clients.length;
  clientCountExternal.textContent = `${clientCount}`;
 }catch(error){
  console.log('error fetching data');
 }
}
fetchAndDisplayCount();

async function fetchAndDisplayClients(){
  try{
    let response = await fetch ('https://jsonplaceholder.typicode.com/users');
    let clients = await response.json();

    let clientsList = document.getElementById('clientsList');
    clientsList.innerHTML ='';


    clients.forEach((client) => {
      let li = document.createElement('li');
      li.textContent = `Name : ${client.name}, Email: ${client.email}`;

      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';
      deleteButton.classList.add('delete-button');
      li.appendChild(deleteButton);

      clientsList.appendChild(li);
    });

    let clientCount = clients.length;
    clientCountExternal.textContent = `${clientCount}`;


    let modal = document.getElementById("modalClients");
    modal.style.display = 'block';
  }catch (error){
    console.error('Error fetching data', error);
  }

};


function openConfirmModal(clientId){
  let confirmModal = document.getElementById("confirmModal");
  confirmModal.style.display = 'block';
  confirmModal.setAttribute('data-client-id', clientId);
}
function closeConfirmModal(){
  let confirmModal = document.getElementById("confirmModal");
  confirmModal.style.display = 'none';
}


function closeClientModal(){
  let modal= document.getElementById("modalClients");
  modal.style.display = 'none';
}

function confirmDeleteClient(){
  let confirmModal = document.getElementById("confirmModal");
  let clientId = confirmModal.getAttribute('data-client-id');
  console.log(`deleted client with id: ${clientId}`);

  closeConfirmModal();
  closeClientModal();
}

document.addEventListener('click', function(event){
  if (event.target.classList.contains('delete-button')){
    let clientId = event.target.getAttribute('data-client-id');
    openConfirmModal(clientId);
  }
});


let openClientsModalBtn = document.getElementById('clientsBtn');
openClientsModalBtn.addEventListener('click', fetchAndDisplayClients);

let closeClientsModalBtn = document.getElementById("closeClients");
closeClientsModalBtn.addEventListener('click', closeClientModal);







async function fetchAndDisplayServices(){
  try{
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();

    let serviceList = document.getElementById('serviceList');
    serviceList.innerHTML = '';

    for (let i=0; i <5; i++) {
      let user = users[i];
      let li = document.createElement('li');
      li.className = 'user-container';
      li.textContent = `Name: ${user.name}, ID: ${user.id}`;
      serviceList.appendChild(li);
  };
    let modal = document.getElementById("modal");
    modal.style.display ='block';
  } catch(error){
    console.error('error fetching data');
  }
};
let openModalBtn = document.getElementById("myBtn");
openModalBtn.addEventListener('click', fetchAndDisplayServices);

function closeModal() {
  let modal = document.getElementById('modal');
  modal.style.display = 'none';
};

let closeModalBtn = document.getElementById("close");
closeModalBtn.addEventListener('click', closeModal);




let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.menu-socials');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});


let slider= document.querySelector('.slider');
            let leftArrow= document.querySelector('.arrow-left');
            let rightArrow= document.querySelector('.arrow-right');
            let sectionIndex = 0;
            rightArrow.addEventListener('click', function(){
                if (sectionIndex < 3) {
                sectionIndex = sectionIndex + 1;
                } else {
                  sectionIndex = 3;
                };
                slider.style.transform = 'translate('+(sectionIndex) * -25 + '%)';
            });
            leftArrow.addEventListener('click', function(){
                if (sectionIndex > 0) {
                sectionIndex = sectionIndex - 1;
                } else {
                  sectionIndex = 0;
                };
                slider.style.transform = 'translate('+(sectionIndex) * -25 + '%)';
            });



            function openContent(evt, number){
                let i, tabcontent, tabbutton;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++){
                    tabcontent[i].style.display = "none";
                }
                tabbutton = document.getElementsByClassName("tabbutton");
                for (i =0; i < tabbutton.length; i++){
                    tabbutton[i].className = tabbutton[i].className.replace("active", "");
                }
                document.getElementById(number).style.display = "block";
                evt.currentTarget.className += "active";
            }
            document.getElementById("defaultOpen").click();


        
            /*let myButton = document.getElementsByClassName("tabbutton");
            myButton.addEventListener("click",function(){
                myButton.style.borderBottom = "none";
                myButton.style.borderTop = "2px solid #DEE2E6";
                myButton.style.borderLeft = "2px solid #DEE2E6";
                myButton.style.borderRight = "2px solid #DEE2E6";

            });*/


