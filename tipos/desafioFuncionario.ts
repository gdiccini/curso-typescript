// alias
type Funcionario = {
  supervisors: string[],
  checkPoint: (horas: number) => string,

}

let funcionario: Funcionario = {
  supervisors: ['supervisor1', 'supervisor2', 'supervisor'],
  checkPoint(time: number): string {
    if (time <= 8) {
      return 'Ponto normal';
    }
      return 'Fora do horário';
  }
}
