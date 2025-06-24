import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import { Link } from "react-router-dom"

export default function Header() {

    return <section className='flex justify-center items-start min-h-screen bg-white px-4'>

        <div className='relative w-full max-w-[900px] h-[50px] flex flex-row justify-center bg-[#2B293D] aspect-auto'>
            <img src="/Ticket.png" alt="Logo-Evently" className='absolute w-10 h-auto -top-1 left-6 -rotate-6 py-1' />
            <h2 className='absolute left-[66px] top-2 font-black text-yellow-300 tracking-wide py-1'>Eventify</h2>

            <nav className="flex gap-8 items-stretch -ml-28">

            <a href="#" className='flex text-white items-center font-[montserrat] text-sm'>Home</a>
            <a href="#" className='flex text-white items-center font-[montserrat] text-sm'>Event</a>
            <a href="#" className='flex text-white items-center font-[montserrat] text-sm'>About</a>
            <a href="#" className='flex text-white items-center font-[montserrat] text-sm'>Contact</a>

            </nav>

            <div className=" absolute top-[15px] right-0 flex justify-end gap-2">

            <a href="#" className='flex text-white px-4 font-[montserrat] text-sm'>Create Event</a>
            <a href="#" className="flex text-white font-[montserrat] text-sm"><Link to="/login">Login</Link></a>
            <button className="flex text-black font-[montserrat] border border-[#FFE047] p-1 bg-[#FFE047] -my-2
            mx-4"><Link to="/register">Sign up</Link></button>

            </div>

        </div>
    </section>
}