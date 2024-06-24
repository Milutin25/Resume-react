import './features.styles.css'

export const Featured = () =>{
    return(
        <div className="bottom">
        <div className="featured">Featured works</div>
            <div className="box-top">
                <div className="col1"><img className="bottom-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAI4rCRpgiYrlapQezzyb-3VbjT6PYtQesglWg7mE-8NT9_tk79oh_Hz5q8YmZwAVYwaE&usqp=CAU" alt="photo" /></div>
                <div className="col2">
                    <h2>Designing Dashboards</h2>
                    <p><span className="span-left" >2020</span><span className="span-right">Dashboard</span></p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>    
        <div className="box-middle">
                <div className="col1"><img className="bottom-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkMFkKd3IeDcmOlFt2D2AMmDEd1J4xUYoE7-qq6ZVbleS2BI0TSfha0LQNy7Ch20nhdQM&usqp=CAU" alt="photo" /></div>
                <div className="col2">
                    <h2>Vibrant Portraits of 2020</h2>
                    <p><span className="span-left" >2018</span><span className="span-right">Illustration</span></p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
        </div>    
        <div className="box-bottom">
                <div className="col1"><img className="bottom-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdXKYwKTklq7CSPF78JHV0Fhus7Dm8F7P9A&s" alt="photo" /></div>
                <div className="col2">
                    <h2>36 Days of Malayalam type</h2>
                    <p><span className="span-left" >2018</span><span className="span-right">Typography</span></p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div> 
        </div>
        </div>  
    )
}