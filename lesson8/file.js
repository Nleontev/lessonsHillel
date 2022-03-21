const listArr = [
    {
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
      title: 'Lorem ipsum dolor 5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    }
  ]

let newUl = document.createElement('ul');

function createLi(arr){
    arr.forEach((el, index, arr) => {
        for (key in arr[index]){
            let newLi = document.createElement('li');
            newLi.textContent = arr[index][key];
            arr[index][key] = newLi;
        }
    })
    return arr;
}

function appendLi(arr, element){
    arr.forEach((el, index, arr) => {
        for (key in arr[index]){
            element.append(arr[index][key])
        }
    })
}

function addClass(arr){
    arr.forEach((el, index, arr) => {
        for (key in arr[index]){
            arr[index][key].classList.add('list-item');
        }
    })
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function giveRandColor(){
    let allLi = document.getElementsByTagName('li');
    for(let li of allLi){
        li.style.color = getRandomColor();
    }
}

let newlistArr = createLi(listArr);

addClass(newlistArr);

appendLi(newlistArr, newUl);

document.body.append(newUl);

giveRandColor();

console.log(newUl);

console.log(newlistArr);

