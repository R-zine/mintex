import { useState } from "react";
import arrow from "../../images/arrow.svg";

const Arrow = () => {
  const [scrollTop, setScrollTop] = useState(0);
  window.onscroll = () => setScrollTop(window.pageYOffset);

  return (
    <>
      {scrollTop > 500 && (
        <div
          className="arrow"
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        >
          <img src={arrow} />
        </div>
      )}
    </>
  );
};

export default Arrow;
