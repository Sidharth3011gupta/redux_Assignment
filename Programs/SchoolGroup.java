import java.util.Scanner;

public class SchoolGroup {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input Name
        System.out.print("Enter your Name: ");
        String name = scanner.nextLine();

        // Input Age
        System.out.print("Enter your Age: ");
        int age = scanner.nextInt();

        // Input Blood Group
        scanner.nextLine(); // Consume the newline character after reading the age
        System.out.print("Enter your Blood Group: ");
        String bloodGroup = scanner.nextLine();

        // Determine Group in the School
        String schoolGroup;
        if (age >= 6 && age <= 10) {
            schoolGroup = "Primary";
        } else if (age >= 11 && age <= 15) {
            schoolGroup = "Middle School";
        } else if (age >= 16 && age <= 18) {
            schoolGroup = "High School";
        } else {
            schoolGroup = "Unknown";
        }

        // Print the information
        System.out.println("\nName: " + name);
        System.out.println("Age: " + age);
        System.out.println("Blood Group: " + bloodGroup);
        System.out.println("School Group: " + schoolGroup);

        scanner.close();
    }
}
