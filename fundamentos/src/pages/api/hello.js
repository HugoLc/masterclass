// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    { 
      name: 'John Doe',
      method: req.method,
      // http://localhost:3000/api/hello?nome=tobias&idade=20
      //params: JSON.stringify(req.query)
      nome: req.query.nome,
      idade: req.query.idade
    })
}
