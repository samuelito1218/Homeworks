import { Libros } from "./libros";

class Stack {
   
    constructor() {
        this.items=[];
        

    }
    push (libros){
        this.items.push(libros);
    }

    pop(){
        return this.items.length > 0 ? this.items.pop() : null;
    }

    peek (){
        return this.items.length > 0 ? this.items[this.items.length - 1] : null

    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length
    }

    print(){
        this.items.slice().reverse().forEach( item => {
            console.log(item);
        });
    }
}
export class Stack{}