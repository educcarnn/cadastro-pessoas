// Importar arquivos
import { dataBase } from "./data.js"
import { Pessoa } from "./pessoa.js"


function gerarCadastro() {
    const name = document.querySelector('#nome').value
    const lastName = document.querySelector('#sobrenome').value

    const nascimento = document.querySelector('#data').value
    if (nascimento === '') {
        throw new Error(alert('Adicione uma data de aniversário para continuar'))
    }

    let data = nascimento.split('-')
    let dia = new Date()
    let diaAtual = dia.getDate()
    let mesAtual = dia.getMonth() + 1 
    // Janeiro é 0 
    let anoAtual = dia.getFullYear()
    console.log(data)

    let idadeDaPessoa = Number(anoAtual - data[0])
    // 2022 - 2004 = 18
    // 26/04 === 26/04 ++ = 19 
    if ((diaAtual) < Number(data[2])  && Number(data[1]) === (mesAtual)) {
        idadeDaPessoa--
    }
    else if (mesAtual < Number(data[1])) {
        idadeDaPessoa--
    }

    if (idadeDaPessoa < 18) {
        throw new Error(alert('Cadastro permitido apenas para maiores de 18 anos'))
    }

    console.log(idadeDaPessoa)

    const email = document.querySelector('#email').value
    dataBase.forEach((elem) => {
        if (email === elem.email) {
            throw new Error(alert('Email já cadastrado'))
        }
    })
    const contato = document.querySelector('#contato').value
    const telefone = document.querySelector('#telefone').value
    const cargo = document.querySelector('#cargo').value


    Pessoa.push(dataBase, name, lastName, nascimento, email, contato, telefone, cargo)
    pessoas(dataBase)
}
const botao = document.querySelector('#register-button')
botao.addEventListener('click', (e) => {
    e.preventDefault()
    gerarCadastro()
})


function filtrarPessoas() {
    const cargo = document.querySelector('#cargoOption')
    let valor = cargo.value

    const filtro = dataBase.filter((pessoa) => {
        if (valor === 'Todos') {
            return pessoa.cargo
        }
        return pessoa.cargo === valor
    })

    pessoas(filtro)

}
const filtroTodos = document.querySelector('#btn')
filtroTodos.addEventListener('click', filtrarPessoas)

function pessoas(array) {

    // Parâmetro para poder ser reutilizado de qualquer forma
    const ul = document.querySelector('#lista-de-alunos')
    ul.innerHTML = ''

    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li')
        li.id = 'information'

        const nameScreen = document.createElement('span')
        nameScreen.innerText = array[i].name

        const lastNameScreen = document.createElement('span')
        lastNameScreen.innerText = array[i].lastName

        const emailScreen = document.createElement('span')
        emailScreen.innerText = array[i].email

        const cargoScreen = document.createElement('cargo')
        cargoScreen.innerText = array[i].cargo

        ul.appendChild(li)
        li.appendChild(nameScreen)
        li.appendChild(lastNameScreen)
        li.appendChild(emailScreen)
        li.appendChild(cargoScreen)
        ul.appendChild(li)
    }
}


