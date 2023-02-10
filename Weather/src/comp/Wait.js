import './Wait.css';
function Wait()
{
    return <>
    <div className="wait">
        <div className="titleWait">
              <h1 id='titleWait'>Search By postcode Or Location</h1>
        </div>

        <div class="cir"></div> 
        
        <div className="changeable">
            <h3>You can Enter any location <br /> But for pincode only indian pincode is valid </h3>
        </div>
    </div>
    </>
}

export default Wait;