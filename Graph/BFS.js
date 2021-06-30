const Graph = require('./AdjancyListImplementation');
const Queue = require('./queue')

let graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(2, 3);
graph.addEdge(1, 2);

const BFS = () => {
    let adjancyList = graph.adjancyList;
    console.log(adjancyList)
    let myQueue = new Queue();
    let result = [];
    myQueue.enqueue([0]);
    while (myQueue.arr.length > 0) {
        //Enter the unvisited neighbours in queue of tracked node, and Pop the element on tracker
        let poppedElement = myQueue.dequeue();
        result.push(poppedElement);
        let allNeighbours = adjancyList[poppedElement];
        let allVisited = result.concat(myQueue.arr);
        let unvisitedNeighbours = allNeighbours.filter(x=> !allVisited.includes(x));
        myQueue.enqueue(unvisitedNeighbours);
    }
    console.log(result);
}


BFS();



