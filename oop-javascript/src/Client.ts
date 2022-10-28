export class Client {
  constructor(private _name: string, private _cpf: number) {}

  get cpf() {
    return this._cpf
  }
}
