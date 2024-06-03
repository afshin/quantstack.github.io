import styles from "./styles.module.css";
import Avatar from "./Avatar";
import SocialMediaContacts from "./SocialMediaContacts";


export default function LargePortraitCard({ person, BioComponent }) {
  if(person.JupyterDistinction === "true" ) {
  return (
    <div className={styles.large_portrait_card}>
      <div className={"container"}>
        <div className={"row" + " " + styles.row_custom }>
          <div className="col col--12 col--offset-1">
            <div className={styles.large_card_complete_name}>
              {person.completeName}
            </div>
            <div className={styles.large_card_position}>{person.position}</div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "var(--ifm-spacing-4xl)" }}>
          <div
            className="col col--3 col--offset-1"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar person={person} />
          </div>
          <div className="col col--6 col--offset-1">
            <div className={styles.bio_container}>
              <BioComponent/>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col col--3 col--offset-1"
          >
            <SocialMediaContacts person={person}></SocialMediaContacts>
          </div>
          <div className="col col--6 col--offset-1">
            <img src={"/img/distinction.svg"}></img>
            Jupyter distinguished contributor
          </div>
        </div>
      </div>
    </div>
  );
}
else {
    return (
      <div className={styles.large_portrait_card}>
        <div className={"container"}>
          <div className="row" style={{ marginBottom: "var(--ifm-spacing-lg)" }}>
            <div className="col col--12">
              <div className={styles.large_card_complete_name}>
                {person.completeName}
              </div>
              <div className={styles.large_card_position}>{person.position}</div>
            </div>
          </div>
          <div className={"row" + " " + styles. row_custom }>
            <div
              className="col col--3 col--offset-1"
             
            >
              <Avatar person={person} />
            </div>
            <div className="col col--6 col--offset-1">
              <div className={styles.bio_container}>
                <BioComponent/>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col col--3 col--offset-1"
            >
              <SocialMediaContacts person={person}></SocialMediaContacts>
            </div>
            <div className="col col--6 col--offset-1">
            </div>
          </div>
        </div>
      </div>
    );
}
}


