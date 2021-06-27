package appwrk;
import java.util.*;
public class WeightedDirectedGraph{

    private Map<String,List<List<Object>>> adjancyList = new HashMap<String,List<List<Object>>>();

    public boolean addEdge(String x, String y, int weight, boolean directed){

        List<List<Object>> NeighbourListForX =null;
        List<List<Object>> NeighbourListForY = null;

        if(adjancyList.get(x) != null) {
            NeighbourListForX = adjancyList.get(x);
            NeighbourListForX.add(new ArrayList<Object>(Arrays.asList(y,weight)));
            adjancyList.put(x, NeighbourListForX);
        }else{
            NeighbourListForX = new ArrayList<List<Object>>();
            NeighbourListForX.add(new ArrayList<Object>(Arrays.asList(y,weight)));
            adjancyList.put(x, NeighbourListForX);
        }

        //If directed then only add
        if(directed) {
            if (adjancyList.get(y) != null) {
                NeighbourListForY = adjancyList.get(y);
                NeighbourListForY.add(new ArrayList<Object>(Arrays.asList(x,weight)));
                adjancyList.put(y, NeighbourListForY);
            } else {
                NeighbourListForY = new ArrayList<List<Object>>();
                NeighbourListForY.add(new ArrayList<Object>(Arrays.asList(x,weight)));
                adjancyList.put(x,NeighbourListForY);
            }
        }
        return true;
    }

    public void printAdjancyList(){
        for(int i=0;i<adjancyList.size();i++) {
            System.out.print(i+"->");
            foreach(Map.Entry<String,List<List<object>>> x: adjancyList.entrySet()) {
                System.out.print(x+",");
            }
            System.out.println();

        }
    }

}
