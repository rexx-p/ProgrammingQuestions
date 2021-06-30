class Graph {

    constructor() {
        this.adjancyMap = {};
    }
    
    addEdge(x, y, weight, isDirected,) {
        if (this.adjancyMap[x]) {
            this.adjancyMap[x].push([y, weight]);
        } else {
            this.adjancyMap[x] = [[y, weight]];
        }

        if (isDirected) {
            if (this.adjancyMap[y]) {
                this.adjancyMap[y].push([x, weight]);
            } else {
                this.adjancyMap[y] = [[x, weight]];
            }
        }

    }

    printAdjancyList() {
        Object.entries(this.adjancyMap).forEach(([key, val], index) => {
            console.log(`${key} : ${JSON.stringify(val)}`)
        })
    }

}

module.exports = Graph;
let graph = new Graph();
graph.addEdge('delhi', 'mumbai', '100', true);
graph.addEdge('mumbai', 'Goa', '10', false);
graph.addEdge('Goa', 'delhi', '90', true);
graph.addEdge('Jaipur', 'mumbai', '80', false);
graph.printAdjancyList();