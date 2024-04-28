import HighlightCard from "../HighlightCards";
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";

function HighLightRow() {
  const currentData = useSelector(
    (state: ReduxState) => state.forecast.data.currentData
  );

  function uvRange(): string {
    if (currentData.uv <= 5) return "low";
    else if (currentData.uv > 5 && currentData.uv < 8) return "moderate";
    else return "high";
  }

  function handleFooterAQI(aqi: number): string {
    if (aqi <= 12) {
      return "Good";
    } else if (aqi <= 35.4) {
      return "Moderate";
    } else if (aqi <= 55.4) {
      return "Unhealthy for Sensitive Groups";
    } else if (aqi <= 150.4) {
      return "Unhealthy";
    } else if (aqi <= 250.4) {
      return "Very Unhealthy";
    } else {
      return "Hazardous";
    }
  }

  // Function to determine humidity description
  function handleFooterHumidity(humidity: number): string {
    if (humidity < 30) {
      return "Low";
    } else if (humidity >= 30 && humidity <= 60) {
      return "Normal";
    } else {
      return "High";
    }
  }

  function handleFooterVisibility(vis_km: number): string {
    if (vis_km <= 0.03) {
      return "Dense Fog";
    } else if (vis_km <= 0.16) {
      return "Moderate Fog";
    } else if (vis_km <= 0.35) {
      return "Light Fog";
    } else if (vis_km <= 1.13) {
      return "Very Light Fog";
    } else if (vis_km <= 2.16) {
      return "Light Mist";
    } else if (vis_km <= 5.4) {
      return "Very Light Mist";
    } else if (vis_km <= 10.8) {
      return "Clear Air";
    } else {
      return "Very Clear Air";
    }
  }

  return (
    <div className="flex flex-wrap gap-6 px-12 py-2">
      <HighlightCard
        title="UV Index"
        data={currentData.uv.toString()}
        footer={uvRange()}
      />
      <HighlightCard
        title="Wind Status"
        data={currentData.wind_kmph.toString()}
        footer="km/h"
      />
      <HighlightCard
        title="Humidity"
        data={currentData.humidity.toString() + "%"}
        footer={handleFooterHumidity(currentData.humidity)}
      />
      <HighlightCard
        title="Visibility"
        data={currentData.vis_km.toString()}
        footer={handleFooterVisibility(currentData.vis_km)}
      />
      <HighlightCard
        title="Sunrise & Sunset"
        data={currentData.sunrise}
        footer={currentData.sunset}
      />
      <HighlightCard
        title="Air quality"
        data={currentData.aqi.toString()}
        footer={handleFooterAQI(currentData.aqi)}
      />
    </div>
  );
}

export default HighLightRow;
