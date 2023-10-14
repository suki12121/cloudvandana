import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanToInteger {
    public static void main(String[] args) {
        // Create a map to store the values of Roman numerals
        Map<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        // Read the Roman numeral input from the user
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase();
        scanner.close();

        int result = 0;
        int prevValue = 0;

        // Iterate through the Roman numeral from right to left
        for (int i = romanNumeral.length() - 1; i >= 0; i--) {
            int value = romanValues.get(romanNumeral.charAt(i));
            if (value < prevValue) {
                result -= value;
            } else {
                result += value;
            }
            prevValue = value;
        }

        // Print the integer value of the Roman numeral
        System.out.println("Integer value: " + result);
    }
}