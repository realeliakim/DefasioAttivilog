import Historico from "../models/Historico";


class HistoricoController {

  async index(req, res){
    const lista = await Historico.findAll({
      attributes: [
        'id',
        'origem',
        'destino',
        'km',
        'tempo',
        'created_at',
      ]
    });

    return res.json(lista);
  }


  async store(req, res){
    const data = await Historico.create(req.body);
    return res.json(data);
  }
}

export default new HistoricoController();