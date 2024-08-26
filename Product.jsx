const Product = ()=> {
    return(
        <div className="flex gap-5 m-10">
            <div className="h-auto shadow-1g bg-indigo-100 rounded-xl p-5">
             <div className="flex w-[250px] flex-col items-center">
                <img className="h-[150px] mx-auto"
                src="user2.jpg"
                alt="user"/>
             </div>
                 <div className="p-5">
                    <h2 className="text-2xl">title</h2>
                    <p className="text-xl">description</p>
                    <p className="text-lg">price</p>
                 </div>
            </div>
            <div className="h-auto shadow-1g bg-indigo-100 rounded-xl p-5">
             <div className="flex w-[250px] flex-col items-center">
                <img className="h-[150px] mx-auto"
                src="user2.jpg"
                alt="user"/>
             </div>
                 <div className="p-5">
                    <h2 className="text-2xl">title</h2>
                    <p className="text-xl">description</p>
                    <p className="text-lg">price</p>
                 </div>
            </div>
        </div>
    );

};
export default Product;