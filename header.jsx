export default function header (){
   return (
   <div className="h-24 px-[3vw] bg-orange-600 justify-between flex items-center">
    {/*logo*/}
    <div>
        <h2 className="font-semibold tracking-wide  text-5xl">Prerana</h2>
    </div>
    {/*nav bar*/}
    <nav className=" flex gap-5 ">
        <li>Home </li>
        <li> Services</li>
        <li>Project</li>
        <li>About</li>
        <li>Blog</li>
    </nav>
   </div>
   );

}