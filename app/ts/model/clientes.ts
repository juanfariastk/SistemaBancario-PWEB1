class Clientes{
    private _clientes:Array<Cliente>;
    constructor(){
        this._clientes = [];
    }

    inserir(cliente:Cliente){
        this._clientes.push(cliente);
    }

    remover(cpf:string){
        this._clientes.map( clienteAtual =>{
            if(clienteAtual.cpf === cpf){
                this._clientes.splice(this._clientes.indexOf(clienteAtual), 1);
            }
        })
    }
    
    listar(){
        return this._clientes;
    }

    pesquisar(cpf:string):any{
        this._clientes.map( clienteAtual => {
            if(clienteAtual.cpf === cpf) 
                return clienteAtual
        })
        return null;
    }

}