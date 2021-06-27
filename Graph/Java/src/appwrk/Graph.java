package appwrk;
import java.util.*;
public class Graph{

    private List<List<Integer>> adjancyList = new ArrayList<List<Integer>>();
    public boolean addEdge(int x, int y){

        List<Integer> NeighbourListForX =null;
        List<Integer> EdgeListForY = null;

        if(adjancyList.size() > x) {
            NeighbourListForX = adjancyList.get(x);
            NeighbourListForX.add(y);
            adjancyList.set(x, NeighbourListForX);
        }else{
            NeighbourListForX = new ArrayList<Integer>();
            NeighbourListForX.add(y);
            adjancyList.add(NeighbourListForX);
        }

        if (adjancyList.size() > y) {
            EdgeListForY = adjancyList.get(y);
            EdgeListForY.add(x);
            adjancyList.set(y, EdgeListForY);
        } else {
            EdgeListForY = new ArrayList<Integer>();
            EdgeListForY.add(x);
            adjancyList.add(EdgeListForY);
        }

        return true;
    }

    public void printAdjancyList(){
        for(int i=0;i<adjancyList.size();i++) {
            System.out.print(i+"->");
            for(int x:adjancyList.get(i)) {
                System.out.print(x+",");
            }
            System.out.println();
        }
    }

}
