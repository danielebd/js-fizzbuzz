'use strict'

/* for(let i = 1; i <= 100; i++) {
    
    if(i % 3 === 0){
        console.log('fizz');
    }

    if(i % 5 === 0){
        console.log('buzz');
    }

    if(i % 5 !== 0 && i % 3 !== 0){
        console.log(i);
    }
    
}
 */
/* const container = document.querySelector('div.container');

for (let index = 1; index <= 100; index++) {

    

    if(index % 3 === 0){

        const box = `<div class="box box--${'fizz'}">${'fizz'}</div>`;

        container.innerHTML += box;

        console.log(box);
    }

    if(index % 5 === 0){

        const box = `<div class="box box--${'buzz'}">${'buzz'}</div>`;

        container.innerHTML += box;

        console.log(box);
    }


    if(index % 3 !== 0 && index % 5 !== 0){

        const box = `<div class="box box--${index}">${index}</div>`;

        console.log(box);

        container.innerHTML += box;
    }
    

} */

const container = document.querySelector('div.container');

for (let index = 1; index <= 100; index++) {

    if( index % 15 === 0){
        const box = document.createElement('div');
        box.append('fizzbuzz');
        container.append(box);
        box.classList.add('box-fizzbuzz');
        console.log(box);
    }

    else if ( index % 3 === 0) {
        const box = document.createElement('div');
        box.append('fizz');
        container.append(box);
        box.classList.add('box-fizz');
        console.log(box);
    }

    else if( index % 5 === 0){
        const box = document.createElement('div');
        box.append('buzz');
        container.append(box);
        box.classList.add('box-buzz');
        console.log(box);
    }

    else {
        const box = document.createElement('div');
        box.append(index);
        container.append(box);
        box.classList.add('box-number');
        console.log(box);
    }

}




