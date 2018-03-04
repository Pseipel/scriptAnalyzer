package de.uni_koeln.dh.lyra.util;

public class ColorGenerator {

	public static String randomColor() {
		    String[] letters = "0123456789ABCDEF".split("");
		    String color = "#";
		    for (int i = 0; i < 6; i++ ) {
		    	int currValue = (int) Math.floor(Math.random() * 16);
		        color += letters[currValue];
		    }
		    return color;
		}
	
}