class Bag {
    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        } 
        else if (weight > 23){
            throw new Error('bag too heavy')
        }
        this.weight = weight
    }

    
    }


 
  


module.exports = Bag