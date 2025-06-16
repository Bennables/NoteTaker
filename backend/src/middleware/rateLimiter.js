import rateLimit from "../config/upstash.js";



const rateLimiter = async (req, res, next) => {
    try {
                                                // usually a user id/ip, but we don't have auth
        const {success} = await rateLimit.limit("my-limit-key");
        if (!success){
            return res.status(429).json({message: "Too many requests"});
        }
        //otherwise continue
        next();
    } catch (error) {
        console.log("Too many requests error", error);
        next(error);
    }
}


export default rateLimiter;
