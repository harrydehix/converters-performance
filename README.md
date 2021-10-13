# converters-performance

This repository was created to compare the performance of some popular community-made unit-converters.

Clone this repository and run `npm install && npm start index` to run the benchmarks on your computer.

## How it works

First every library gets called 1000 times to allow the runtime to warmup. Afterwards 200.000 trials are performed for each library. The results on my computer are displayed below:

## Results

### Converting -12°C to Kelvin

<table>
	<thead>
		<tr>
			<th>library</th>
			<th>execution time per call</th>
			<th>calls per second </th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>convertUnits</td>
			<td>4323.528μs</td>
			<td>231</td>
		</tr>
		<tr>
			<td>convert</td>
			<td>247.695μs</td>
			<td>4037</td>
		</tr>
		<tr>
			<td>simpleUnits</td>
			<td>219.771μs</td>
			<td>4550</td>
		</tr>
		<tr>
			<td>uom</td>
			<td>340.527μs</td>
			<td>2937</td>
		</tr>
		<tr>
			<td>math</td>
			<td>140.086μs</td>
			<td>7138</td>
		</tr>
	</tbody>
</table>

### Converting 100 meter to feet

<table>
	<thead>
		<tr>
			<th>library</th>
			<th>execution time per call</th>
			<th>calls per second </th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>convertUnits</td>
			<td>911.145μs</td>
			<td>1098</td>
		</tr>
		<tr>
			<td>convert</td>
			<td>218.724μs</td>
			<td>4572</td>
		</tr>
		<tr>
			<td>simpleUnits</td>
			<td>234.563μs</td>
			<td>4263</td>
		</tr>
		<tr>
			<td>uom</td>
			<td>351.774μs</td>
			<td>2843</td>
		</tr>
		<tr>
			<td>math</td>
			<td>143.808μs</td>
			<td>6954</td>
		</tr>
	</tbody>
</table>

### Converting 48 hours to minute

<table>
	<thead>
		<tr>
			<th>library</th>
			<th>execution time per call</th>
			<th>calls per second </th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>convertUnits</td>
			<td>6642.838μs</td>
			<td>151</td>
		</tr>
		<tr>
			<td>convert</td>
			<td>217.079μs</td>
			<td>4607</td>
		</tr>
		<tr>
			<td>simpleUnits</td>
			<td>205.717μs</td>
			<td>4861</td>
		</tr>
		<tr>
			<td>uom</td>
			<td>401.482μs</td>
			<td>2491</td>
		</tr>
		<tr>
			<td>math</td>
			<td>138.753μs</td>
			<td>7207</td>
		</tr>
	</tbody>
</table>

### Converting 1.5l to in³

<table>
	<thead>
		<tr>
			<th>library</th>
			<th>execution time per call</th>
			<th>calls per second </th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>convertUnits</td>
			<td>4262.335μs</td>
			<td>235</td>
		</tr>
		<tr>
			<td>convert</td>
			<td>239.753μs</td>
			<td>4171</td>
		</tr>
		<tr>
			<td>simpleUnits</td>
			<td>215.009μs</td>
			<td>4651</td>
		</tr>
		<tr>
			<td>uom</td>
			<td>890.855μs</td>
			<td>1123</td>
		</tr>
		<tr>
			<td>math</td>
			<td>137.780μs</td>
			<td>7258</td>
		</tr>
	</tbody>
</table>
