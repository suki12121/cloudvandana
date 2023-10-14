import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();
        scanner.close();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String str) {
        str = str.toLowerCase();
        boolean[] alphabet = new boolean[26]; // 26 letters from 'a' to 'z'

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if ('a' <= ch && ch <= 'z') {
                int index = ch - 'a';
                alphabet[index] = true;
            }
        }

        for (boolean letterUsed : alphabet) {
            if (!letterUsed) {
                return false; // Not all letters from 'a' to 'z' were encountered
            }
        }

        return true; // All letters from 'a' to 'z' were encountered
    }
}