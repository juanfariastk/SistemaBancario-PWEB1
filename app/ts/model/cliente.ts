class Cliente{
  private _nome:string;
  private _cpf:string;
  private _conta:Conta;
  
  constructor(nome:string, cpf:string){
    this._nome = nome;
    this._cpf = cpf;
    
  }

  get nome(){ return this._nome; };
  get cpf(){return this._cpf;};
  get conta(){return this._conta;};
  
  set nome(novoNome:string){ this._nome = novoNome;};
  set cpf(novoCpf:string){this._cpf = novoCpf;};
  set conta(novaConta:Conta){this._conta = novaConta;}
  
  toString():string{
      return `Nome: ${this._nome} - CPF: ${this._cpf} - Conta ${this._conta}`; };
}