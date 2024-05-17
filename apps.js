const mybutton=document.querySelector('button');
const mylist=document.querySelector('#jokelist');
const clearjoke=document.querySelector('#clr');

const addjoke=async ()=>{
    const joketext=await createjoke();
    const newjoke=document.createElement('LI');
    newjoke.append(joketext);
    mylist.append(newjoke);

}


const createjoke=async ()=>{
    const config={headers:{Accept:'application/json'}};
    const res=await axios.get('https://icanhazdadjoke.com/',config);
    return res.data.joke;
}

mybutton.addEventListener('click',addjoke);

