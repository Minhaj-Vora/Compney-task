import java.util.Scanner;
class Car{
   public void car(){
       System.out.println("class car");
   }
    public void vehicleType(){
       System.out.println("Vehicle type Car");
    }
}
class Maruti extends Car{
    public void maruti(){
        System.out.println("class maruti.");
    }
    public void brand(){
        System.out.println("Brand:Maruti");
    }
    public void speed(){
        System.out.println("Max: 90kmph");
    }
}
class Maruti800 extends Maruti{
    public Maruti800(){
        System.out.println("Maruti model:800");
    }
    public void speed(){
        System.out.println("Max: 80kmph");
    }

    public static void main(String args[])
    {
        Maruti800 obj=new Maruti800();
        obj.vehicleType();
        obj.brand();
        obj.speed();

    }
}
