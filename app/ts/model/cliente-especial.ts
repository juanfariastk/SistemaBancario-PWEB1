class ClienteEspecial extends Cliente{
    private _clienteDependentes: Array<Cliente>

    constructor(nome: string, cpf: string) {
        super(nome, cpf)
        this._clienteDependentes = [];
    }

    inserir(cliente: Cliente) {
        this._clienteDependentes.push(cliente)
    }

    remover(cpf:string){
        this._clienteDependentes.map( clienteAtual =>{
            if(clienteAtual.cpf === cpf){
                this._clienteDependentes.splice(this._clienteDependentes.indexOf(clienteAtual), 1);
            }
        })
    }

    listar() {
        return this._clienteDependentes
    }

    pesquisar(cpf:string):any{
        this._clienteDependentes.map( clienteAtual => {
            if(clienteAtual.cpf === cpf) 
                return clienteAtual
        })
        return null;
    }
}