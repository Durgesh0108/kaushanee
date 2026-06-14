import ArchivoFont from "@/components/ArchivoFont";
import Footer from "@/components/FRONTEND/Footer";
import Header from "@/components/FRONTEND/Header";
import RufinaFont from "@/components/RufinaFont";

// import "@/public/dist/output-tailwind.css";

const Layout = ({ children }) => {
  return (
    <>
      {/* <link rel="stylesheet" href="dist/output-tailwind.css" /> */}
      {/* <link rel="preload" href="@/public/css/Gotham-Black.woff2" as="font" type="font/woff2"></link> */}
      {/* <RufinaFont> */}
      <ArchivoFont>
        <div className="bg-white h-screen flex  flex-col justify-between overflow-auto no-scrollbar">
          <Header />

          <div className="relative top-16 sm:top-16 md:top-16 lg:top-[5.5rem]">
            {children}
          </div>
          <Footer />
        </div>
      </ArchivoFont>
      {/* </RufinaFont> */}
    </>
  );
};

export default Layout;
