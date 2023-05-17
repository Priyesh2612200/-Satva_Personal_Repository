import profileimg from "../Assets/Profile_Photo.jpg";
function Header(props) {
    return (<>
        <div className='row'>
            <div className='col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-0'>
                <img src={profileimg} className='img-fluid' alt="Prifile Photo" />
            </div>
            <div className='col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 p-0 name-data '>
                <h1 className='mt-4'> {props.headerfirstname}</h1>
                <h2>{props.headerlastname}</h2>
                <h3>{props.headerprofile}</h3>
            </div>
        </div>
    </>)
}

export default Header;