export interface Estacionamento {
  estado: string
  cidade: string
  rua: string
  nomeEstacionamento: string
  imagemLocal: string
  qtdVagas: number
  vagas: [
      {
        idVaga: number,
        numero: number,
        reservada: boolean,
        disponivel: boolean
      }
    ]
  empresasConveniadas: [
      {
        nome: string,
        logotipo: string
      }
    ]
}
