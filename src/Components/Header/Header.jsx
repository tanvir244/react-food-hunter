
const Header = () => {
    return (
        <div className="space-y-6">
            {/* navbar  */}
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost w-[54%] text-lg p-0 md:text-xl font-lexend lg:text-2xl font-bold">Food Hunter</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1 font-semibold font-lexend ">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div class="navbar-end gap-1 md:gap-4">
                    {/* <input type="text" placeholder="Type here" class="input input-bordered w-1/2 max-w-xs" /> */}
                    <div class="form-control">
                        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
                    </div>
                    <img src="/src/assets/icons/Frame 5.svg" alt="" />
                </div>
            </div>

            {/* banner */}
            <div style={{
                backgroundImage: `url(https://i.ibb.co/bgDz96n/banner.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }} className="rounded-3xl">
                {/* <img src="/src/assets/icons/banner.png" alt="" /> */}
                <div className="py-20 md:py-24 lg:py-32 text-center space-y-8 text-white">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold w-[90%] md:w-[80%] mx-auto leading-snug">Delicious food comes in a wide variety of flavors from around the world !</h2>
                    <p className="w-[85%] md:w-[60%] mx-auto">Savor the irresistible harmony of succulent chicken Parmesan, draped in tangy marinara sauce and molten mozzarella, atop a bed of al dente spaghetti.</p>
                    <div className="flex flex-row gap-4 justify-center">
                        <button className="bg-[#0be58a] border-[#0be58a] hover:border-white text-black hover:bg-white px-3 md:px-6 py-2 md:py-4 font-semibold md:font-bold text-sm md:text-lg rounded-full">Explore Now</button>
                        <button className="border border-white hover:bg-white hover:text-black px-3 md:px-6 py-2 md:py-4 font-semibold md:font-bold text-sm md:text-lg rounded-full">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;