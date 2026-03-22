import  { useContext } from "react";
import InstalledAppsContext from "../context/InstalledAppsContext";

const Installation = () => {
    const { installedApps} = useContext(InstalledAppsContext);
    
    console.log(installedApps);
  return (
    <div>
      <h1>{installedApps.length}</h1>
    </div>
  );
};

export default Installation;
