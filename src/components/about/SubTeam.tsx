import styles from "./styles.module.css";
import SmallPortraitCard from "./SmallPortraitCard";
import Popup from "reactjs-popup";
import LargePortraitCard from "./LargePortraitCard";
import { useEffect, useState } from "react";

export function SubTeamDesktop({ description, subTeam, subTeamBioComponents }) {
  return (
    <div className={styles.subteam_component}>
      <h2 style={{ textAlign: "center" }}> {description}</h2>
      <div className={"container" + " " + styles.subteam_container}>
        <ul className={"row" + " " + styles.row_custom}>
          {subTeam.map((person, index) => (
            <li className="cards_list" key={index}>
              <div className="col">
                <Popup
                  className={styles.portrait_popup}
                  trigger={
                    <div>
                      {" "}
                      <SmallPortraitCard person={person} />
                    </div>
                  }
                >
                  <LargePortraitCard
                    person={person}
                    BioComponent={subTeamBioComponents[index]}
                  ></LargePortraitCard>
                </Popup>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SubTeamMobile({ description, subTeam }) {
  return (
    <div className={styles.subteam_component}>
      <h2 style={{ textAlign: "center" }}> {description}</h2>
      <div className={"container" + " " + styles.subteam_container}>
        <ul className={"row" + " " + styles.row_custom}>
          {subTeam.map((person, index) => (
            <li className="cards_list" key={index}>
              <div className="col">
                <SmallPortraitCard
                  person={person}
                ></SmallPortraitCard>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SubTeam ({ description, subTeam, subTeamBioComponents }) {
  const breakpointValue: number = 996;


  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return <div>{isDesktop ? <SubTeamDesktop description={description} subTeam={subTeam} subTeamBioComponents={subTeamBioComponents}/> : <SubTeamMobile description={description} subTeam={subTeam} subTeamBioComponents={subTeamBioComponents} />}</div>;
}

