class ContaBancaria{
  constructor(agencia,numero,tipo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  get saldo(){
    return this._saldo
  }

  set saldo(valor){
    this._saldo = valor;
  }

  sacar(valor){
    if(valor > this._saldo){
      return 'Operação negada!'
    }
    this._saldo = this._saldo - valor;

    return this._saldo;
  }

  depositar(valor){
    
    this._saldo = this._saldo + valor;

    return this._saldo;

  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia,numero,cartaoCredito){
    super(agencia,numero);

    this.tipo = 'Corrente';
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito(){
   return this._cartaoCredito;

  }

  set cartaoCredito(valor){
    this._cartaoCredito = valor;
  }

}

class ContaPoupança  extends ContaBancaria{
  constructor(agencia,numero){
    super(agencia,numero);

    this.tipo = 'Poupança';

  }
}

class ContaUniversitaria  extends ContaBancaria{
  constructor(agencia,numero){
    
    super(agencia,numero);

    this.tipo = 'Universitária';
  }

  sacar(valor){
    if(valor > 500){
      return 'Operação negada, limite para saldo R$ 500,00.';
    }

    this._saldo = this._saldo - valor;
  }

}



