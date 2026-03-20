import { createContext, useState } from "react";

const InstalledAppsContext = createContext();

export const InstalledAppsProvider = ({ children }) => {
    const [installedApps, setInstalledApps] = useState([]);
    
    return (
        <InstalledAppsContext.Provider value={{installedApps, setInstalledApps}}>
            {children}
        </InstalledAppsContext.Provider>
    );
};

export default InstalledAppsContext;