$ = function(id){
	return document.getElementById(id);
}


addBody = function(){
    const container = document.querySelector('#body');
    const p = document.createElement('p');
    p.textContent = 'Hey I\'m red!';
    p.setAttribute('style', 'color: red; background: white;');
    container.appendChild(p);

    const h3 = document.createElement('h3');
    h3.textContent = 'I\'m a blue h3!';
    h3.setAttribute('style', 'color: blue; background: white;');
    container.appendChild(h3);

    const div = document.createElement('div');
    div.classList.add('in');
    div.setAttribute('style', 'border-style: solid;; background: pink;');

    const h1 = document.createElement('h1');
    h1.textContent = 'I\'m in a div';
    div.appendChild(h1);

    const p2 = document.createElement('p2');
    p2.textContent = 'ME TOO!';
    div.appendChild(p2);

    container.appendChild(div);
}

add = function(){
    const container = document.querySelector('#body');
    const h2 = document.createElement('h2');
    h2.textContent = 'It was that white cloak that soiled me, not the other way around.';
    h2.setAttribute('style', 'color: gold; background: red;');
    container.appendChild(h2);
}


window.onload = function(){
    addBody();
    $("btn").onclick = function(){add();}

}