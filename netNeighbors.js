let neighbors = [];
let neighborList = document.getElementById("net-neighbors-list");
neighborList.innerHTML = "";

function initNeighbors() {
    if(neighbors.length == 0) {
        neighborList.innerHTML = "I'm lonely. I have no neighbors!";
        return
    }
    for(let i = 0; i < neighbors.length; i++) {
        addNeighbor(neighbors[i]);
    }
}

function addNeighbor(link) {
    neighbors.push(link);
    let listElement = document.createElement("li");
    listElement.appendChild(document.createTextNode(link));
    neighborList.appendChild(listElement);
}

initNeighbors();