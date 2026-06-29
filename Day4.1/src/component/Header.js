function Header() {
    return (
        <div className="heading">
            <img
                className="images"
                src="https://imgs.search.brave.com/IcZ8P_IgjLQJ8pdNq8kq7q7rQmD-m2Of8rn6TCGRdl0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhkLzQ2/LzBiLzhkNDYwYmFh/MzhlZTg4Y2IyNmI3/YjRhZTlhZGY2NzNl/LmpwZw"
            />

            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Home & Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
            </div>
            <input
                className="search"
                type="search"
                placeholder="Search for products,brand and more"
            ></input>

            <div className="profile">
                <button className="pro">Profile</button>
                <button className="pro">Wishlist</button>
                <button className="pro">Bag</button>
            </div>
        </div>
    );
}
export default Header;