public class LinearSearch{
    public static void main (String[] args){
          int[] arr1 = {23,34,656,34,89};
          int target = 56; 
          boolean ans = linearSearch(arr1, target);
          System.out.println(ans);
    }

    static boolean linearSearch(int arr[] , int target){
        for(int i=0 ; i <arr.length ; i++){
            if(arr[i] == target){
                return true;
            }
        }
        return false;
    }

    static int linearSearch1(int arr[] , int target){
        for (int i=0 ; i < arr.length ; i++){
            if(arr[i] == target){
                return i;
            }
        }

        return -1;
    }
}