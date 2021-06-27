class Graph {

    constructor() {
        this.adjancyList = [];
    }

    addEdge(x, y) {
        if (this.adjancyList[x]) {
            this.adjancyList[x].push(y);
        } else {
            this.adjancyList[x] = [y];
        }

        if (this.adjancyList[y]) {
            this.adjancyList[y].push(x);
        } else {
            this.adjancyList[y] = [x];
        }

    }

    printAdjancyList() {
        this.adjancyList.forEach((element, index) => {
            console.log(`${index} : ${element}`)
        })
    }

}


let graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(2, 3);
graph.addEdge(1, 2);
graph.printAdjancyList();