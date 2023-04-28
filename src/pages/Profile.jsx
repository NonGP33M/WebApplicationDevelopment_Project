import React from "react";

function Profile() {
    return (
      <div class='mx-20 pt-32' style={{ paddingBottom: "650px" }}>
        <div class='flex justify-center'>
            <img className="rounded-full pr-7" 
            src="https://www.nicepng.com/png/detail/274-2744819_people-silhouette-avatar-business-man-icon.png" 
            alt="user picture" width="300px"></img>
            <div class='pt-20 px-11'>
                <p class='font-black text-5xl'>[Username]</p>
                <br/>
                <span class='font-medium text-4xl'>[First name] [Last name]</span>
            </div>
            <div class='flex-col pt-14'>
                <p class='flex justify-center font-medium text-2xl'>Score</p>
                <p class='flex justify-center font-black text-5xl'>30</p>
                <div class='flex justify-center pt-2'>
                    <div class='pr-4'>
                        <p class='flex justify-center text-base'>Success</p>
                        <p class='flex justify-center text-lg'>2</p>
                    </div>
                    <div>
                        <p class='flex justify-center text-base'>Failed</p>
                        <p class='flex justify-center text-lg'>0</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Profile;
  