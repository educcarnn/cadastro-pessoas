class Pessoa {
    static push(dataBase, nome, lastName, nascimento, email, contato, telefone, cargo){
        dataBase.push({
            name: nome,
            lastName: lastName,
            nascimento: nascimento, 
            email: email,
            contato: contato, 
            telefone:  telefone,
            cargo: cargo
        })
    }  
}

export { Pessoa }