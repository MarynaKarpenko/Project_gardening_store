import s from "./Map.module.css";

export default function Map() {
  const mapStyles = {
    width: "100%",
  };

  return (
    <div style={mapStyles} className={s.map_div}>
      <iframe
        title="Google Map"
        width="100%"
        height="350"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Tel%20Ran%20Berlin+(Starta%20Institute%20by%20Tel-Ran)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        loading="lazy"
      >
        <a href="https://www.maps.ie/population/">Population Estimator map</a>
      </iframe>
    </div>
  );
}
