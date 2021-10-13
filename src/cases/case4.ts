import compareFunctions from "../compareFunctions";
import c1 from "simple-units";
import c2 from "convert";
import c3 from "convert-units";
import { Amount } from "uom";
import { Units } from "uom-units";

function simpleUnits() {
    c1.from(2.5, "l").to("in3");
}

function math() {
    2.5 * 61.024;
}

function convert() {
    c2(2.5, "l").to("cubic inch");
}

function convertUnits() {
    c3(2.5).from("l").to("in3");
}

function uom() {
    Amount.valueAs(Units.CubicInch, Amount.create(2.5, Units.Liter));
}

export default (htmlOutput: boolean) => {
    compareFunctions(htmlOutput, "case4", "2.5l to in³", convertUnits, convert, simpleUnits, uom, math);
}