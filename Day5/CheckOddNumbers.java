    import java.util.List;

    public class CheckOddNumbers {
        public static void main(String[] args) {
            // Example list of integers
            List<Integer> numbers = List.of(1, 3, 5, 7, 9); // Change this list to test

            // Check if all numbers in the list are odd
            boolean allOdd = containsOnlyOddNumbers(numbers);

            // Print the result
            if (allOdd) {
                System.out.println("The list contains only odd numbers.");
            } else {
                System.out.println("The list contains one or more even numbers.");
            }
        }

        // Method to check if a list contains only odd numbers
        public static boolean containsOnlyOddNumbers(List<Integer> list) {
            for (Integer number : list) {
                if (number % 2 == 0) {
                    // Found an even number
                    return false;
                }
            }
            // All numbers were odd
            return true;
        }
    }
    