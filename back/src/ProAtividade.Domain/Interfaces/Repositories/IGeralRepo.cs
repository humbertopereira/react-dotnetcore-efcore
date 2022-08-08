using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.Domain.Interfaces.Repositories
{
    public interface IGeralRepo
    {
        void Adicionar<T>(T entityu) where T : class;
        void Atualizar<T>(T entityu) where T : class;
        void Deletar<T>(T entityu) where T : class;
        void DeletarVarias<T>(T[] entityu) where T : class;

        Task<bool> SalvarMudancasAsync();
    }
}