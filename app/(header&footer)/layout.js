import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function footerLayout({children}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}
