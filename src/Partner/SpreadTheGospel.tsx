import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OfflineGiving from "./OfflineGiving";
import OnlineGiving from "./OnlineGiving";

const SpreadTheGospel = () => {
  return (
    <div className="w-full py-12 ">
      <div className="w-10/12 mx-auto">
        <Tabs defaultValue="payment" className="w-100 pb-72 ">
          <div className="flex justify-center items-center">
          <TabsList className="grid w-full grid-cols-2 ">
            <TabsTrigger value="Offline Giving">Offline Giving</TabsTrigger>
            <TabsTrigger value="Online Giving">Online Giving</TabsTrigger>
          </TabsList>
          </div>

          <TabsContent value="Offline Giving">
            <OfflineGiving />
          </TabsContent>
          <TabsContent value="Online Giving">
            <OnlineGiving />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SpreadTheGospel;
