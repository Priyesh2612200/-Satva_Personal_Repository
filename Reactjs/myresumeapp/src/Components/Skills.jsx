function Skiils({myskillsinfo}) {
    return (<>
        <div className='mt-5'>
            <h3 style={{ color: "#3e3e3f" }}>SKILLS</h3>
            <div className='d-flex'>
                <div style={{ width: '100px' }}>{myskillsinfo.skill1}</div>
                <div><i className="fa fa-battery-4 "></i></div>
            </div>

            <div className='d-flex'>
                <div style={{ width: '100px' }}>{myskillsinfo.skill2}</div>
                <div><i className="	fa fa-battery-3 "></i></div>
            </div>

            <div className='d-flex'>
                <div style={{ width: '100px' }}>{myskillsinfo.skill3}</div>
                <div><i className="fa fa-battery-2"></i></div>
            </div>

            <div className='d-flex'>
                <div style={{ width: '100px' }}>{myskillsinfo.skill4}</div>
                <div><i className="fa fa-battery-3"></i></div>
            </div>

            <div className='d-flex'>
                <div style={{ width: '100px' }}>{myskillsinfo.skill5}</div><div><i className="	fa fa-battery-1"></i>
                </div>
            </div>

        </div>
    </>
    )
}
export default Skiils;