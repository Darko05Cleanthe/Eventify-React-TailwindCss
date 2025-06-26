import HeaderProfile from "../../components/HeaderProfile"
import Footer from "../../components/Footer"


export default function UserProfile() {

    return (<section className="min-h-screen flex flex-col">

        <HeaderProfile />

        <div className="relative flex flex-row flex-grow w-full max-w-screen-lg mx-auto">

            <div className="absolute h-[1290px] -top-[629px] w-1/4 bg-[#EEEEEE] text-[#2D2C3C] p-4 font-[montserrat]">
            <h4 className="text-lg font-semibold mb-4">Account Settings</h4>
            
            </div>

            <div className="flex-grow bg-white p-4">

            </div>

        </div>

        <Footer />

           </section>)
}