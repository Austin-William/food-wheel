import "../styles/components/cup_of_tea.css";

export default function CupOfTea() {
  return (
    <div id="container">
      <div className="steam" id="steam1"> </div>
      <div className="steam" id="steam2"> </div>
      <div className="steam" id="steam3"> </div>
      <div className="steam" id="steam4"> </div>

      <h2></h2>

      <div id="cup">
        <div id="cup-body">
          <div id="cup-shade"></div>
        </div>
        <div id="cup-handle"></div>
      </div>

      <div id="saucer"></div>

      <div id="shadow"></div>
    </div>
  )
}