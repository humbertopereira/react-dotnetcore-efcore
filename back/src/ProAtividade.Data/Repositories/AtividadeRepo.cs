using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProAtividade.Data.Context;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories
{
    public class AtividadeRepo : GeralRepo, IAtividadeRepo
    {
        private readonly DataContext _context;
        public AtividadeRepo(DataContext context) : base(context)
        {
            this._context = context;
        }
        public async Task<Atividade> PegarPorIdAsync(int id)
        {
            IQueryable<Atividade> query = _context.Atividades;
            query = query.AsNoTracking()
                .OrderBy(e => e.Id)
                .Where(e => e.Id == id);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Atividade> PegarPorTituloAsync(string titulo)
        {
            IQueryable<Atividade> query = _context.Atividades;
            query = query.AsNoTracking()
                .OrderBy(e => e.Id)
                .Where(e => e.Titulo == titulo);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Atividade[]> PegarTodasAsync()
        {
            IQueryable<Atividade> query = _context.Atividades;
            query = query.AsNoTracking().OrderBy(e => e.Id);
            return await query.ToArrayAsync();
        }
    }
}