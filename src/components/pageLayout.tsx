import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface Props {
  _site?: any;
  children?: React.ReactNode;
}

const PageLayout = ({ children, _site }: Props) => {
  return (
    <div className="relative min-h-screen font-display ">
      <Header _site={_site} />
      {children}
      <Footer _site={_site} />
    </div>
  );
};

export default PageLayout;
