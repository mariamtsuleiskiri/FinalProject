
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
      li.setAttribute('data-client-id', client.id);
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';
      deleteButton.classList.add('delete-button');
      deleteButton.setAttribute('data-client-id', client.id);
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

  let clientItem = document.querySelector(`li[data-client-id="${clientId}"]`);
  if (clientItem){
    clientItem.remove();
    updateClientCount();
  }else{
    console.log(`client with id ${clientId} not found `);
  }

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

function updateClientCount(){
  let clientsList = document.getElementById('clientsList');
  let clientCount = clientsList.children.length;
  clientCountExternal.textContent = `${clientCount}`;
}







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

function closeModalServices() {
  let modal = document.getElementById('modal');
  modal.style.display = 'none';
};

let closeModalBtn = document.getElementById("close");
closeModalBtn.addEventListener('click', closeModalServices);




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


            let phoneNumberInput = document.getElementById('phoneNumber');
            let placeholderChanged = false;

            phoneNumberInput.addEventListener('focus', function(){
              if (!placeholderChanged){
                phoneNumberInput.placeholder= '+995';
                placeholderChanged = true;
              }
            });

            phoneNumberInput.addEventListener('blur', function(){
              if (phoneNumberInput.value === '+995'|| phoneNumberInput.value === ''){
                phoneNumberInput.placeholder = 'Your Phone';
                placeholderChanged = false;
              }
            });
             document.getElementById('form').addEventListener('submit', function(event){
              let phoneNumber = phoneNumberInput.value;
              let phoneNumberPattern = /^\+995\d{9}$/;

              if (!phoneNumberPattern.test(phoneNumber)){
                alert('Please enter a valid phone number with +995 and 9 digits.');
                event.preventDefault();
              }
             });


             let myForm = document.getElementById('form');
             let modalInfo = document.getElementById('contactModal');
             let closeModalButton = document.getElementById('closeModal');
             let modalName = document.getElementById('modalName');
             let modalEmail = document.getElementById('modalEmail');
             let modalPhone = document.getElementById('modalPhone');
             let modalSubject = document.getElementById('modalSubject');

             let name, email, phoneNumber, subject;

             function openModal(){
              modalInfo.style.display = 'block';
              modalName.textContent = `Name: ${name}`;
              modalEmail.textContent = `Email: ${email}`;
              modalPhone.textContent = `Phone: ${phoneNumber}`;
              modalSubject.textContent = `Subject: ${subject}`;
             }

             function closeModal(){
              modalInfo.style.display = 'none';
             }

             myForm.addEventListener('submit', function(event){
              event.preventDefault();
              name= document.getElementById('name').value;
              email= document.getElementById('email').value;
              phoneNumber = document.getElementById('phoneNumber').value;
              subject= document.getElementById('subject').value;

              if (subject.length < 5) {
                alert('Subject must be at least 5 characters long.');
            } else {
                openModal();
            }
             });
             closeModalButton.addEventListener('click', closeModal);

             let openModalLink = document.getElementById('openModalLink');
             openModalLink.addEventListener('click', function(event){
              event.preventDefault();
              openModal();
             });








            /*let myButton = document.getElementsByClassName("tabbutton");
            myButton.addEventListener("click",function(){
                myButton.style.borderBottom = "none";
                myButton.style.borderTop = "2px solid #DEE2E6";
                myButton.style.borderLeft = "2px solid #DEE2E6";
                myButton.style.borderRight = "2px solid #DEE2E6";

            });*/


