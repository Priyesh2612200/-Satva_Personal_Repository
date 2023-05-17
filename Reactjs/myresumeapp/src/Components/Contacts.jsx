function Contacts({mycontactsinfo}) {
    return (<>
        <div className='mt-5'>
            <h3 style={{ color: "#3e3e3f" }}>CONTACTS</h3>
            <div><i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;{mycontactsinfo.phonenumbre}</div><br></br>
            <div><i className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;{mycontactsinfo.email} </div><br></br>
            <div><i className="fa fa-globe"></i>&nbsp;&nbsp;&nbsp;{mycontactsinfo.website}</div><br></br>
            <div><i className="fa fa-address-card-o"></i>&nbsp;&nbsp;&nbsp;{mycontactsinfo.address}</div>
        </div>
    </>)
}

export default Contacts;