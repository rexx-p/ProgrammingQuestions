package appwrk;

public class Main {

    public static void main(String[] args) {
        Graph graph = new Graph();
        graph.addEdge(0,1);
        graph.addEdge(0,2);
        graph.addEdge(2,3);
        graph.addEdge(1,2);
        graph.printAdjancyList();
        System.out.println("rajesh was here");
    }
}
