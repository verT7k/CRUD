'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


    const tempClient = {
        nome: "Lucinda",
        email:  "lucinda@hotmail.com.br",
        celular: "47997225147",
        cidade: "Joinville"
    }
    
    const getLocalStorage = () => JSON.parse (localStorage.getItem('db_client')) ?? []
    const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify (dbClient))

   // CRUD - Create read udate delete

   const deleteClient = (index) => {
        const dbClient = readClient()
        dbClient.splice(index, 1)
        setLocalStorage(dbClient)
   }

   const updateClient = (index, client) => {
        const dbClient = readClient()
        dbClient[index] = client
        setLocalStorage(dbClient)
   }

    const readClient = () => getLocalStorage()

    const createClient = (client) => {
        const dbClient = getLocalStorage()
        dbClient.push (client)
        setLocalStorage(dbClient)
    }

    // Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)