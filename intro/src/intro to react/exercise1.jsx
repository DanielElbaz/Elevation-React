
function Exercise1() {
    
    let companies = [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }
    ]

    const showCompany = () => { return companies.map(c => <div id={c.name}>{c.name} makes {c.revenue} every year</div>) }

    return (
        <div className="ex-space">
            <h4 className='ex-title'>Exercise 1</h4>
            <div className="exercise" id="ex-1">
                {showCompany()}
            </div>
        </div>
    );
}
export default Exercise1;