// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: false
}

@perfilAdmin
class MudancaAdministrativa {
  critico() {
      console.log('Algo crítico foi alterado!')
  }
}

new MudancaAdministrativa().critico()

type NovoConstrutor = { new(...args: any[]): {} }

function perfilAdmin<T extends NovoConstrutor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args)
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error('Usuário não é admin')
      }
    }
  }
}
