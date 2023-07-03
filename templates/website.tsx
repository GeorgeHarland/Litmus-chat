import Sidebar from "@/components/Sidebar";

const WebsiteTemplate = ({children}: {children: React.ReactNode}) => (
  <>
    <Sidebar />
    {children}
  </>
)

export default WebsiteTemplate;
