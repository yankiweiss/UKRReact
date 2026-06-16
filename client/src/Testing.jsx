import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";
import { useState } from "react";

function Testing() {
  const [range, setRange] = useState();

  const handleSelect = (selectedRange) => {
    setRange(selectedRange);
    console.log(selectedRange);
  };
  return (
    <>
      <DayPicker
        style={{ height: "80%", minHeight: "80%" }}
        animate
        mode="range"
        selected={range}
        onSelect={handleSelect}
        resetOnSelect
      />

      <button type="button" onClick={() => setRange(undefined)}>
        Reset
      </button>

      <section>
        <table>
          <th>
            <tr>
              <th>from</th>
              <th>to</th>
            </tr>
          </th>
          <tbody>
            <tr>
            <td>{range?.from?.toLocaleDateString()}</td>  <td>{range?.to?.toLocaleDateString() || "Not selected yet" }</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Testing;
