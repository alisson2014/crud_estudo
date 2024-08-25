export class LocalStorage {

    static getAll() {
        return JSON.parse(localStorage.getItem('db_client')) || [];
    }

    static setLocalStorage(data) {
        localStorage.setItem('db_client', JSON.stringify(data));
    }

    //JSON.stringify() convertendo um objeto em uma string JSON
    //JSON.parse() convertendo uma string JSON em um objeto

};