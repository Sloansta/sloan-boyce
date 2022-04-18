
const Nav = () => {
    return (
        <div className="top-0 left-0 w-screen h-15 bg-gray-500 text-white flex flex-row shadow-lg">
            <span className="p-2 m-3 text-2xl"><b>Sloan Boyce</b></span>
            <div className="p-3 m-4 duration-300 ease-in-out hover:bg-gray-700 hover:cursor-pointer">Works</div>
            <div className="p-3 m-4 duration-300 ease-in-out hover:bg-gray-700 hover:cursor-pointer">About</div>
        </div>
    )
};

export default Nav;