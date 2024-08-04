import "./Talks.scss";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Talks() {
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">

        <div className="badges">
          {talkSection.badges.map((badge, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: badge }} />
          ))}
        </div>
      </div>
    </Fade>
  );
}
