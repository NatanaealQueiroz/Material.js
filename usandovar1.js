// Uma variável definida fora de uma função só poderar ser acessada a qualqer momento
{
    {
        {
            {
                var sera = 'Será?'
            }
        }
    }
}
console.log(sera) 

function teste (){ // Uma variável definida dentro de uma função só poderar ser acessada dentro da função
    var local = 123
    console.log(local)
}

teste()