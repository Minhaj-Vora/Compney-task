import java.lang.NoClassDefFoundError;
class Swap{
    public static void main(String args[]){
        int a=5;
        int b=10;
        System.out.println("Before swaping:"+a+",b="+b);
        a=a+b;
        b=a-b;
        a=b-a;
        System.out.println("Afterswaping a = "+a+ " ,b ="+b);
    }
}
