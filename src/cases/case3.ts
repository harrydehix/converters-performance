import compareFunctions from "../compareFunctions";
import c1 from "simple-units";
import c2 from "convert";
import c3 from "convert-units";
import { Amount } from "uom";
import { Units } from "uom-units";

function simpleUnits() {
    c1.from(24, "h").to("min");
}

function math() {
    24 * 60;
}

function convert() {
    c2(24, "h").to("min");
}

function convertUnits() {
    c3(24).from("h").to("min");
}

function uom() {
    Amount.valueAs(Units.Minute, Amount.create(24, Units.Hour));
}

export default (htmlOutput: boolean) => {
    compareFunctions(htmlOutput, "case3", "24h to min", convertUnits, convert, simpleUnits, uom, math);
}