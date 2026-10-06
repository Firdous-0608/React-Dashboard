function Home(){
    return(
        <div>
            <h1>Dashboard</h1>
            <div className="cards">
                <div className="card">
                    <h3>Users</h3>
                    <p>120</p>
                </div>
                <div className="card">
                    <h3>Orders</h3>
                    <p>80</p>
                </div>
                <div className="card">
                    <h3>Sales</h3>
                    <p>$50,000</p>
                </div>
            </div>
        </div>
    )
}
export default Home;