import testFunction from "./testFunction"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import wunderbar from "@gribnoysup/wunderbar";
import units, { Convertible } from "simple-units";
import fs from "fs";

export default (htmlOutput: boolean, name: string, description: string, ...fns: ((...any: any[]) => any)[]) => {
    console.log("#######################################################");
    console.log("Running performance test. Please wait...");
    console.log("#######################################################");
    console.log("Test name: ", name);
    console.log("Test description: ", description);
    console.log("#######################################################");
    // Measure the function's average time per call
    const avgs = [];
    for (const fn of fns) {
        const time = units.from(testFunction(fn), "s");
        avgs.push(time);
    }
    let min = avgs[0];
    for (const avg of avgs) {
        if (avg.compare(min) === -1) min = avg;
    }
    min.asBest();
    const avgValues = [];
    for (const avg of avgs) {
        avgValues.push(avg.as(min.unit).value);
    }

    for (let i = 0; i < fns.length; i++) {
        console.log(`'${fns[i].name}' took ${avgs[i]} per call.`);
    }

    printGraph(...avgValues);

    const cps = [];
    for (let i = 0; i < fns.length; i++) {
        const copy = avgs[i].copy().as("s");
        cps.push(Math.round(1 / copy.value));
        console.log(`That are ${cps[i]} calls per second for '${fns[i].name}'`);
    }
    printGraph(...cps);
    if (htmlOutput) generateHTMLFile(`../${name}.html`, fns, avgs, cps);
}

function printGraph(...data: number[]) {
    const { chart, scale } = wunderbar(data, {
        min: 0,
        length: 50,
    });
    console.log();
    console.log(chart);
    console.log();
    console.log(scale);
    console.log();
}

function generateHTMLFile(path: string, fns: ((...any: any[]) => any)[], avgs: Convertible[], cps: number[]) {
    const results = [];
    for (let i = 0; i < fns.length; i++) {
        results.push({
            name: fns[i].name,
            avg: avgs[i],
            cps: cps[i],
        });
    }
    fs.writeFileSync(path,
        "<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th>library</th>\n\t\t\t<th>execution time per call</th>\n\t\t\t<th>calls per second </th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n");
    for (const result of results) {
        fs.appendFileSync(path, `\t\t<tr>\n\t\t\t<td>${result.name}</td>\n\t\t\t<td>${result.avg.format("%.3f%s")}</td>\n\t\t\t<td>${result.cps}</td>\n\t\t</tr>\n`);
    }
    fs.appendFileSync(path, "\t</tbody>\n</table>");
}