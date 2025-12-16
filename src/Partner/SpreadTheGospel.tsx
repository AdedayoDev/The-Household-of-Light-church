import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OfflineGiving from "./OfflineGiving";
import OnlineGiving from "./OnlineGiving";

const SpreadTheGospel = () => {
  const [tab, setTab] = useState("offline");

  // Read tab from URL on first load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlTab = params.get("tab");

    if (urlTab === "online" || urlTab === "offline") {
      setTab(urlTab);
    } else {
      setTab("offline"); // default
    }
  }, []);

  // Update URL when tab changes
  const handleTabChange = (value: string) => {
    setTab(value);

    const params = new URLSearchParams(window.location.search);
    params.set("tab", value);

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  return (
    <div className="w-full py-12 pb-72">
      <div className="mx-auto w-10/12">
        <Tabs value={tab} onValueChange={handleTabChange}>
          {/* Centered Tabs */}
          <div className="flex justify-center">
            <TabsList className="inline-flex rounded-full bg-gray-100 h-12">
              <TabsTrigger
                value="offline"
                className="
                  rounded-full px-6 py-2 text-sm font-medium
                  data-[state=active]:bg-primary
                  data-[state=active]:text-white
                "
              >
                Offline Giving
              </TabsTrigger>
              <TabsTrigger
                value="online"
                className="
                  rounded-full px-6 py-2 text-sm font-medium
                  data-[state=active]:bg-primary
                  data-[state=active]:text-white
                "
              >
                Online Giving
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Content */}
          <div className="pt-8">
            <TabsContent value="offline">
              <OfflineGiving />
            </TabsContent>

            <TabsContent value="online">
              <OnlineGiving />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default SpreadTheGospel;
