const specialEdges = [[0, 2], [0, 6], [0, 8],[1, 7],[2, 6], [2, 8],[3, 5],[6, 8]];

function isSpecialEdge(i, j) {

    for (let edge of specialEdges) {
        if ((i === edge[0] && j === edge[1]) || (i === edge[1] && j === edge[0])) {
            return true;
        }
    }
    return false;
}

function isValidMove(i, j, visited)
{
    const isSpecial = isSpecialEdge(i, j);

    if (!isSpecial) {
        return true;
    } else {
        return visited[Math.floor((i + j) / 2)] === 1;
    }

}


function DFS(current, result, visited, path, length) {
    visited[current] = 1;
    path.push(current);

    if (length === 4) {
        result.push([...path]);
    } else {
        for (let next = 0; next < 9; next++) {
            if (!visited[next] && isValidMove(current, next, visited)) {
                DFS(next, result, visited, path, length + 1);
            }
        }
    }

    visited[current] = 0;
    path.pop();
}


function generatePatterns() {
    const visited = Array(9).fill(0);
    const result = [];
    const path = [];

    for (let i = 0; i < 9; i++) {
        DFS(i, result, visited, path, 1);
    }

    console.log(result.length);
    return result;
}

const result = generatePatterns();
const edges = document.getElementsByClassName('edges');

let current = 0;
function showPattern(paths){

    for(let i =1; i< paths.length; i++){
        let edge;
        if(paths[i-1] > paths[i])
             edge = document.getElementsByClassName(`edge${paths[i]}${paths[i-1]}` )[0];
        else
            edge = document.getElementsByClassName(`edge${paths[i-1]}${paths[i]}` )[0];

        edge.style.visibility = 'visible';


    }

}

function hidePattern(paths)
{
    for(let i =1; i< paths.length; i++){
        let edge;
        if(paths[i-1] > paths[i])
             edge = document.getElementsByClassName(`edge${paths[i]}${paths[i-1]}` )[0];
        else
            edge = document.getElementsByClassName(`edge${paths[i-1]}${paths[i]}` )[0];

        edge.style.visibility = 'hidden';


    }

}

function showNext(){
    if(current == (result.length -1))
        return;

    hidePattern(result[current]);
    current = current+1;
    document.getElementById('index').innerText = `${current}`;
    showPattern(result[current]);

}

function showPrev(){
    if(current == 0)
        return;

    hidePattern(result[current]);
    current = current-1;
    document.getElementById('index').innerText = `${current}`;
    showPattern(result[current]);
}


showPattern(result[current]);
 document.getElementById('prev').addEventListener('click', showPrev);
 document.getElementById('next').addEventListener('click', showNext);






  
