package net.mrfreex;

import java.io.File;
import java.io.FileWriter;
import java.nio.file.Files;
import java.nio.file.Path;

public class Automatize {

    private static String FORMATTER;

    public static void main(String[] args) {



        String dir = System.getProperty("user.dir");
        Path pof = Path.of(dir + "/formatter.txt");

        try {
            FORMATTER = Files.readString(pof);
        } catch (Exception ex) {}

        final File folder = new File(dir + "/input");
        Automatize.listFilesForFolder(folder, null);
    }

    public static void process(File file, String subdir) {

        String destination = System.getProperty("user.dir") + "\\output\\";
        System.out.println(destination);
        Path path = Path.of(file.getAbsolutePath());
        String content = null;
        try {
             content = Files.readString(path);
        } catch (Exception ex) {
            System.out.println("[-] Error: " + ex.getMessage());
        }

        if (content == null) return;

        content = content.replaceAll("<!--(.*?)-->", "");
        content = content.replaceAll("fill=\"(.*?)\"", "");
        String cname = file.getName().replace(".svg", "");
        cname = cname.substring(0, 1).toUpperCase() + cname.substring(1);
        String formatted = String.format(FORMATTER, cname, content, cname);

        try {
            FileWriter myWriter = new FileWriter(destination + cname + ".tsx");
            myWriter.write(formatted);
            myWriter.close();
        } catch (Exception ignored) {
            System.out.println("[-] Error: " + ignored.getMessage());
        }

    }

    public static void listFilesForFolder(final File folder, String subdir) {
        for (final File fileEntry : folder.listFiles()) {
            if (fileEntry.isDirectory()) {
                listFilesForFolder(fileEntry, fileEntry.getName());
            } else {
                System.out.println("[+] Processing: " + fileEntry.getName());
                process(fileEntry, subdir != null ? subdir : "");
            }
        }
    }
}
