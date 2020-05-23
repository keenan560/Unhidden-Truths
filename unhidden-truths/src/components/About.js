import React from "react";
import couple from "../couple.jpg"

export default function About() {
    return (
        <div id='about-box' className='container mx-auto mt-4 shadow'>
            <h1 className='text-center'>About</h1>
                <img id='couple' className='img-thumbnail' src={couple}></img>
                <p id='about-body' className=''>God bless you and welcome! I believe by faith that the Lord Jesus Christ has given me experiences by His Holy Spirit, with the purpose to share and help build my brothers and sisters. More importantly, this site's purpose is to shed light to those who are lost and who are going through similar experiences. Please take a look  at the different pages on the navigation bar which will contain content that has helped me on my journey. The content is not your average watered down message that you may be accustom to hearing in your local church. My goal is to expose the truth and destory the works of the devil. My message is simple: Jesus is the only way, truth, and life. By no other means can or will we enter Heaven.</p>
        </div>

    )
}