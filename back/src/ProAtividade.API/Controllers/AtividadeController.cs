using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Data;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [Route("api/[controller]")]
    public class AtividadeController : Controller
    {
        private readonly ILogger<AtividadeController> logger;
        private readonly DataContext context;
        public AtividadeController(ILogger<AtividadeController> logger, DataContext context)
        {
            this.context = context;
            this.logger = logger;
        }
        private IEnumerable<Atividade> Atividades = new List<Atividade>(){
            new Atividade(1),
            new Atividade(2),
            new Atividade(3)
        };

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return context.Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return context.Atividades.FirstOrDefault(e => e.Id == id);
        }

        [HttpPost]
        public IEnumerable<Atividade> Post([FromBody] Atividade atividade)
        {
            context.Atividades.Add(atividade);

            if (context.SaveChanges() > 0)
                return context.Atividades;
            else
                throw new Exception("Você não conseguiu adicionar uma atividade");
        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade)
        {
            if (atividade.Id != id) throw new Exception("Você esta tentando atualizar uma atividade errada");

            context.Update(atividade);

            if (context.SaveChanges() > 0)
                return context.Atividades.FirstOrDefault(ativ => ativ.Id == id);
            else
                throw new Exception("Você não conseguiu adicionar uma atividade");
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var atividade = context.Atividades.FirstOrDefault(ativ => ativ.Id == id);

            if (atividade == null)
                throw new Exception("Você esta tentando deletar uma atividade que não existe.");

            context.Atividades.Remove(atividade);

            return context.SaveChanges() > 0;
        }
    }
}