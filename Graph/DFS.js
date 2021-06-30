const Graph = require('./AdjancyListImplementation');
const Queue = require('./queue')

let graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(2, 3);
graph.addEdge(1, 2);

const DFS = () => {
    let adjancyList = graph.adjancyList;
    console.log(adjancyList)
    let stack = [];
    let result = [];
    stack.push(0);
    result.push(0);
    while (stack.length > 0) {
        //find unvisited neighbours
        let topElement = stack[stack.length - 1];

        let neighbours = graph.adjancyList[topElement];
        console.log(topElement, ' neighbours : ', neighbours);
        let allVisited = result.concat(stack);
        let unvisitedNeighbours = neighbours.filter(x => !allVisited.includes(x));
        if (unvisitedNeighbours.length > 0) {
            stack = stack.concat(unvisitedNeighbours);
            result = result.concat(unvisitedNeighbours);
        } else {
            stack.pop();//if no unvisited neighbours then pop
        }
    }
    console.log(result);
}


DFS();



