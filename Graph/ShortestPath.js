const Graph = require('./AdjancyListImplementation');
const Queue = require('./queue')

let graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(2, 3);
graph.addEdge(1, 2);


let memoisedDistance = {};

let recursion = 0;
const findShortestPath = (srcNode, targetNode, allVisited, totalPath) => {
    if (!allVisited.includes(srcNode)) {
        allVisited.push(srcNode);
    }
    console.log('recursion : ', recursion++, '::', srcNode, targetNode, allVisited, totalPath)


    if (srcNode == targetNode) {
        return totalPath;
    }

    if (memoisedDistance[srcNode] != undefined) {
        return memoisedDistance[srcNode];
    }

    let neighbours = graph.adjancyList[srcNode];
    let unvisitedNeighbours = neighbours.filter(x => !allVisited.includes(x));
    console.log('neighbours', unvisitedNeighbours);
    if (unvisitedNeighbours.length > 0) {
        //findNeighbours
        let minimumPath = 999;
        for (let i = 0; i < unvisitedNeighbours.length; i++) {
            srcNode = unvisitedNeighbours[i];
            let path = findShortestPath(srcNode, targetNode, allVisited, totalPath + 1);
            memoisedDistance[srcNode] = path;
            if (path < minimumPath) {
                minimumPath = path;
            }
        }
        return minimumPath; //find minimum of path from all neighbours.636p
    } else {
        return 999;
    }
}


let shortestPath = findShortestPath(1, 2, [], 0);

console.log('shortestPath : ', shortestPath)



