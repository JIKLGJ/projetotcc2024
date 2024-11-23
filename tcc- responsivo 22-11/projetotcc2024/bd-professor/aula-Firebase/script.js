import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD705S3rZc2Zvhq5-NUh7NOz02AeHc0Lmk",
    authDomain: "aula-fb-fe1c0.firebaseapp.com",
    projectId: "aula-fb-fe1c0",
    storageBucket: "aula-fb-fe1c0.appspot.com",
    messagingSenderId: "433625725045",
    appId: "1:433625725045:web:8092b93c10bbe08829603c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const itemCollection = collection(db, 'items');

// Referências DOM
const itemForm = document.getElementById('itemForm');
const itemName = document.getElementById('itemName');
const itemDescription = document.getElementById('itemDescription');
const itemList = document.getElementById('itemList');
const showDataBtn = document.getElementById('showDataBtn');
const hideDataBtn = document.getElementById('hideDataBtn');

// Função para renderizar itens
async function renderItems() {
    itemList.innerHTML = '';
    try {
        const querySnapshot = await getDocs(itemCollection);
        querySnapshot.forEach((doc) => {
            const item = doc.data();
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.name} - ${item.description}
                <button onclick="deleteItem('${doc.id}')">Excluir</button>
                <button onclick="editItem('${doc.id}', '${item.name}', '${item.description}')">Editar</button>
            `;
            itemList.appendChild(li);
        });
    } catch (e) {
        console.error('Erro ao renderizar itens: ', e);
    }
}

// Função para adicionar item
async function addItem(e) {
    e.preventDefault();
    try {
        await addDoc(itemCollection, {
            name: itemName.value,
            description: itemDescription.value
        });
        itemName.value = '';
        itemDescription.value = '';
        renderItems();
    } catch (e) {
        console.error('Erro ao adicionar item: ', e);
    }
}

// Função para excluir item
async function deleteItem(id) {
    try {
        await deleteDoc(doc(db, 'items', id));
        renderItems();
    } catch (e) {
        console.error('Erro ao excluir item: ', e);
    }
}

// Função para editar item
async function editItem(id, name, description) {
    const newName = prompt('Novo nome', name);
    const newDescription = prompt('Nova descrição', description);
    if (newName !== null && newDescription !== null) {
        try {
            await updateDoc(doc(db, 'items', id), {
                name: newName,
                description: newDescription
            });
            renderItems();
        } catch (e) {
            console.error('Erro ao editar item: ', e);
        }
    }
}

// Exponha as funções globalmente
window.deleteItem = deleteItem;
window.editItem = editItem;

// Função para mostrar dados
function showData() {
    itemList.style.display = 'block';
    showDataBtn.style.display = 'none';
    hideDataBtn.style.display = 'block';
}

// Função para esconder dados
function hideData() {
    itemList.style.display = 'none';
    showDataBtn.style.display = 'block';
    hideDataBtn.style.display = 'none';
}

// Evento de submissão do formulário
itemForm.addEventListener('submit', addItem);

// Eventos de mostrar e esconder dados
showDataBtn.addEventListener('click', showData);
hideDataBtn.addEventListener('click', hideData);

// Renderizar itens ao carregar a página
renderItems();
