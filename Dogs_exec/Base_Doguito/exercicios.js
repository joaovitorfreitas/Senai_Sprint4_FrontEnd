
var dogs = [
    {
        nome: 'Sammy',
        idade: 6,
        raca: 'Samoieda'
    },
    {
        nome: 'Dragão',
        idade: 5,
        raca: 'Spitz Alemão'
    },
    {
        nome: 'Milton',
        idade: 8,
        raca: 'Spitz Alemão'
    },
    {
        nome: 'Penny',
        idade: 6,
        raca: 'Spitz Alemão'
    },
    {
        nome: 'Nenem',
        idade: 4,
        raca: 'Spitz Alemão'
    },
    ];

   



  


  function soSpitz1(obj){

    if(obj.raca.length > 8){
        return obj
        }
        
    }
    
    function soSplitz(){
        var ValidateDogs = dogs.filter(function (n) {
            return n.raca === "Spitz Alemão"
        })
        return alert(ValidateDogs)
    }

    

    
    












