import compareFunctions from "../compareFunctions";
import c1 from "simple-units";
import c2 from "convert";
import c3 from "convert-units";
import { Amount } from "uom";
import { Units } from "uom-units";

function simpleUnits() {
    c1.from(100, "m").to("ft");
}

function math() {
    100 * 3.281;
}

function convert() {
    c2(100, "m").to("ft");
}

function convertUnits() {
    c3(100).from("m").to("ft");
}

function uom() {
    Amount.valueAs(Units.Foot, Amount.create(100, Units.Meter));
}


export default (htmlOutput: boolean) => {
    compareFunctions(htmlOutput, "case2", "100m to ft", convertUnits, convert, simpleUnits, uom, math);
}