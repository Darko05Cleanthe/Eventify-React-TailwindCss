

export default function Footer() {

    return <section className="flex flex-col items-center justify-start min-h-screen px-4 bg-white">

        <div className="relative w-full max-w-[900px] h-[50px] bg-[#2B293D] aspect-auto">

            <img src="/CreateEventCTA.png" alt="Footer img"/>
            <button className="absolute right-[32px] top-[55px] flex flex-row gap-2 font-bold bg-[#FFE047] p-[8px] px-6 rounded-md"><img src="/Vector.png" alt="Create Event" className='w-5 h-auto' />Create Event</button>

            <div className="relative w-full max-w-[900px] h-[120px] top-0 flex flex-col bg-[#FFE047] my-7">

              <h2 className="flex font-[montserrat] text-[#2D2C3C] text-lg font-bold my-4 mx-12">Subscribe to our Newsletter</h2>
              <p className=" font-sans text-sm mx-12 -my-2">Receive our weekly newsletter & updates with new events from <br />your favourite organizers & venues.</p>
              <input type="email" placeholder="Enter your e-mail address" id="email" className="absolute top-[35px] right-36 text-sm border border-black rounded-tl-md rounded-bl-md p-3 px-8"/>
              <button  className="absolute w-20 top-[35px] right-[64px] text-[#FFE047] bg-[#2B293D] py-[10px] rounded-tr-md rounded-br-md rounded-none">Submit</button>

            </div>

            <div className="relative flex flex-row flex-1 w-full max-w-[900px] h-[300px] -top-7 bg-[#2B293D] my-auto gap-5">
                
                <nav className="flex flex-col">
                    <h2 className="mx-10 py-6 font-[montserrat] text-white text-md">Company Info</h2>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">About Us</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Contact Us</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Careers</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">FAQs</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Terms of Service</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Privacy Policy</a>
                </nav>

                <nav className="flex flex-col -mx-10"> 
                    <h2 className="flex flex-col mx-10 py-6 font-[montserrat] text-white text-md">Help</h2>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Account Support</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Listing Events</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Event ticketing</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Ticket Purchase Terms & Conditions</a>
                </nav>
                    
                <nav className="flex flex-col -mx-10">
                    <h2 className="flex flex-col mx-10 py-6 font-[montserrat] text-white text-md">Categories</h2>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Concert and Gigs</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Festivals & Lifestyle</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Business & Networking</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Foods & Drinks</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Performing Arts</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Sports & Outdoors</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Exhibitions</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Workshops, Conferences & Classes</a>
                </nav>
                
                <nav className="flex flex-col -mx-10">
                    <h2 className="flex flex-col mx-10 py-6 font-[montserrat] text-white text-md">Follow us</h2>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Facebook</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Instagram</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Twitter</a>
                    <a href="#" className="text-[#A9A9A9] mx-10 text-sm">Youtube</a>
                </nav>

                <nav className="flex flex-col">
                    <h2 className="flex flex-col mx-10 py-6 font-[montserrat] text-white text-md text-nowrap">Download The App</h2>
                    <button onClick={() => window.location.href = 'https://play.google.com/store/apps'} className="w-[154px] mx-10 h-auto cursor-pointer"><img src="/src/assets/play-store.png" alt="Telecharger sur PlayStore" className="w-[154px] h-auto" /></button>
                    <button onClick={() => window.location.href = 'https://www.apple.com/fr/app-store/'} className="w-[154px] h-auto cursor-pointer my-3 mx-10"><img src="/src/assets/app-store.png" alt="Telecharger sur App-Store" className="w-[154px] h-auto" /></button>
                </nav>
                
                <hr className='absolute border border-t-1 w-[820px] border-[#A9A9A980] left-[39px] top-[263px]'/>
                <p className="absolute top-[270px] left-[290px] text-[#A9A9A9]">&copy; 2023 Eventify. All rights reserved.</p>
            </div>

        </div>


    </section>
}