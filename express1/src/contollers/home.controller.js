function  homeRouteV1(req,res) {
    console.log(" home route");
    
    return res.json({
        msg: "v1 roter home"
    })
}

function  homeRouteV2(req,res) {
    return res.json({
        msg: "v2 roter home"
    })
}

module.exports= {
    homeRouteV1,
    homeRouteV2
}