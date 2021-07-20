import { useState } from "react";

const RightMain = () => {
  const [property, setProperty] = useState("notflex");
  return (
    <div className="sideRight">
      <h3 className="textTitleUnderLine textTitleAlign textTitleRightMainColor">
        Flex Container
      </h3>
      <p className="textTitleAlign">
        The Flex Container is how you begin working with flexBox. Let's play
        with it.
      </p>
      <div className="textTitleAlign">
        <input
          type="radio"
          id="flex"
          name="flexChoice"
          value="flex"
          onChange={() => setProperty("flex")}
        />
        <label for="flex">flex</label>
      </div>
      <div className="textTitleAlign">
        <input
          type="radio"
          id="notflex"
          name="flexChoice"
          value="notflex"
          onChange={() => setProperty("notflex")}
        />
        <label for="notflex">not flex</label>
      </div>
      <div>
        <div
          class="flex-container"
          style={property === "flex" ? { display: "flex" } : null}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
      </div>
    </div>
  );
};
export default RightMain;
