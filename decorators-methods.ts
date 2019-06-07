function log(target, key) {
  console.log(key + 'se ha llamado');
}

class Persona3 {
  private name: string;

  constructor(name:string) {
    this.name = name;
  }

  @log
  sayMyName() {
    console.log(this.name);
  }
}

const persona3: Persona3 = new Persona3('Alan');
persona3.sayMyName() // 'Alan' // 'sayMyName se ha llamado'