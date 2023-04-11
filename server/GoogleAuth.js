//Server ClientID

// import { OAuth2Client } from 'google-auth-library';
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID||"925153524005-hvdvlaka8eqn6idalnu510p7v0n4a04r.apps.googleusercontent.com");

// export  const  googleAuth = async (token)=>{
//     const ticket = await client.verifyIdToken({
//         idToken:token,
//         audience:process.env.GOOGLE_CLIENT_ID||"925153524005-hvdvlaka8eqn6idalnu510p7v0n4a04r.apps.googleusercontent.com"
//     });
//     const payload = ticket.getPayload();

//     console.log(`User ${payload.name} verified`);

//     const {sub,email,name,picture}=payload;
//     const userID =sub;
//     // return payload;
//     return ({studentID:userID,email,name:name,dp:picture});
// }

// Local host clinetID
import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID||"925153524005-62air23cner9cv43ojtic6leqrtm0kak.apps.googleusercontent.com");

export  const  googleAuth = async (token)=>{
    const ticket = await client.verifyIdToken({
        idToken:token,
        audience:process.env.GOOGLE_CLIENT_ID||"925153524005-62air23cner9cv43ojtic6leqrtm0kak.apps.googleusercontent.com"
    });
    const payload = ticket.getPayload();

    console.log(`User ${payload.name} verified`);

    const {sub,email,name,picture}=payload;
    const userID =sub;
    // return payload;
    return ({studentID:userID,email,name:name,dp:picture});
}

