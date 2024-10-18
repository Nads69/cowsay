import "dotenv/config";
import cowsay from "cowsay";

console.log(
	cowsay.say({
		text: `Hello my name is ${process.env.NAME} and I'm at ${process.env.CAMPUS}`,
		e: "oO",
		T: "U ",
	}),
);
