import HeaderProfile from "../../components/SimpleHeader"
import FooterProfile from "../../components/FooterProfile"
import { Link } from "react-router-dom"


export default function EventTitleType() {

    return <section className="flex flex-col min-h-screen">

        <HeaderProfile />

        <div className="relative flex flex-col flex-grow w-full max-w-screen-lg mx-auto">

            <Link to='/create-event'><img src="/fleche.png" alt="" className="relative w-5 h-auto top-14 ml-6"/></Link>
            <p className="font-[montserrat] text-[#2D2C3C] font-bold text-xl m-8 mx-20 my-8">Event Title</p>
            <h4 className="text-left font-[montserrat] font-medium text-lg ml-20">Location</h4>
            <h4 className="text-left font-[montserrat] font-medium text-lg ml-20">Time</h4>
            <img src="/Progress2.png" alt="" className="h-10 mx-14 px-6 my-5"/>
            <p className="font-[montserrat] text-[#2D2C3C] font-lg text-xl m-8 mx-20 my-8">What type of event are you running?</p>

            <div className="flex flex-row">

                <button className="cursor-pointer"><img src="/TicketedEvent1.png" alt="" className="w-[450px] h-[160px] px-6 mx-14 my-5"/></button>
                <button className="cursor-pointer"><img src="/FreeEvent.png" alt="" className="w-[450px] h-[160px] mx-6 my-5 border-2 border-[#2B293D] rounded-lg"/></button>

            </div>
    
            <p className="font-[montserrat] text-[#2D2C3C] font-lg text-xl m-8 mx-20 my-8">What tickets are you selling?</p>

             <div className="relative flex flex-row font-sans my-6 mx-14 ml-[80px]">

                <label htmlFor="ticket-name"  className="absolute font-sans font-medium text-[#2D2C3C] whitespace-nowrap -top-[30px] ml-1">Ticket Name</label>
                <input type="text" id="ticket-name" placeholder="Ticket Name e.g. General Admission" className="border border-[#828282B2] w-[400px] rounded-sm px-3 ml-1"/>

                <div className="relative ml-16">

                <label htmlFor="event-price" className="absolute font-sans font-medium text-[#2D2C3C] whitespace- -top-[30px] left-10">Ticket Price</label>
                <input type='number' step='0.01' min='0' id="event-price" placeholder="0.00" className="border border-[#828282B2] w-[200px] rounded-sm px-3 ml-10 whitespace-nowrap"/>
                <button><img src="/buttons.png" alt="" className="w-[55px] h-[20px]"/></button>
                </div>

            </div>

            <div className="flex flex-row my-5 justify-end mr-6 items-center">

                <Link to='/event-title' className="font-[montserrat] text-[#2D2C3C] font-bold text-sm m-8 mx-20 ml-40">Go back</Link>
                <Link to='/event-title-info' className="flex font-sans font-bold bg-[#2B293D] text-white rounded-lg px-8 w-[180px] text-nowrap text-sm h-[40px] items-center">Save & Continue</Link>
        
            </div>

        </div>

        <FooterProfile />
    </section>
}