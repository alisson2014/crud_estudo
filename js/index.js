import { LocalStorage } from "./localStorage";

//CREATE -> Adicionar ou Criar dados em alguma base
const addClient = client => {
    //Todos que ja estiverem salvos
    const clients = LocalStorage.getAll();
    //Salvamos o novo cliente no final
    clients.push(client);
    //Salvamos no localStorage
    LocalStorage.setLocalStorage(clients);
};

//DELETE -> Deleção de dados em alguma base
const removeClient = index => {
    const clients = LocalStorage.getAll();
    clients.splice(index, 1);
    LocalStorage.setLocalStorage(clients);
};

//UPDATE -> Atualização de dados em alguma base
const updateClient = (index, client) => {
    const clients = LocalStorage.getAll();
    clients[index] = client;
    LocalStorage.setLocalStorage(clients);
};

//READ -> Um cliente 
const readClient = index => {
    return LocalStorage.getAll()[index];
};

// READ -> Todos os clientes
const clients = () => {
    return LocalStorage.getAll();
};