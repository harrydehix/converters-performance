import compareFunctions from "../compareFunctions";
import c1 from "simple-units";
import c2 from "convert";
import c3 from "convert-units";
import { Amount } from "uom";
import { Units } from "uom-units";

function simpleUnits() {
    c1.from(-12, "°C").to("K");
}

function math() {
    -12 + 273.15;
}

function convert() {
    c2(-12, "C").to("K");
}

function convertUnits() {
    c3(-12).from("C").to("K");
}

function uom() {
    Amount.valueAs(Units.Kelvin, Amount.create(-12, Units.Celsius));
}

export default (htmlOutput: boolean) => {
    compareFunctions(htmlOutput, "case1", "-12°C to K", convertUnits, convert, simpleUnits, uom, math);
}

