import java.io.*;
import java.security.*;
import javax.crypto.*;
import javax.crypto.spec.*;

public class FileEncryptor {
    public static void main(String[] args) throws Exception {
        String password = "your_password_here";
        String inputFile = "input_file.txt";
        String encryptedFile = "encrypted_file.enc";
        // Generate salt
        byte[] salt = generateSalt();
        // Set iteration count
        int iterationCount = 10000;
        encrypt(inputFile, encryptedFile, password, salt,
                iterationCount);
        System.out.println("Encryption complete.");
    }

    public static void encrypt(String inputFile, String outputFile, String password, byte[] salt, int iterationCount)
            throws Exception {
        // Generate key
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBEWithMD5AndDES");
        PBEKeySpec spec = new PBEKeySpec(password.toCharArray(), salt, iterationCount);
        SecretKey secretKey = factory.generateSecret(spec);
        Cipher cipher = Cipher.getInstance("PBEWithMD5AndDES");
        // Initialize cipher
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        // Read input file
        FileInputStream fis = new FileInputStream(inputFile);
        byte[] inputBytes = new byte[(int) inputFile.length()];
        fis.read(inputBytes);
        // Encrypt file
        byte[] outputBytes = cipher.doFinal(inputBytes);
        // Write encrypted data to output file
        FileOutputStream fos = new FileOutputStream(outputFile);
        fos.write(outputBytes);
        // Close streams
        fis.close();
        fos.close();
    }

    public static byte[] generateSalt() throws NoSuchAlgorithmException {
        SecureRandom random = SecureRandom.getInstanceStrong();
        byte[] salt = new byte[8];
        random.nextBytes(salt);
        return salt;
    }
}