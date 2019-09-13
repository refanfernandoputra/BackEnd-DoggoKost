const connection = require('../db')

exports.index = (req, res) => {
    connection.query('SELECT * FROM houseslist', (err, rows)=> {
        if (err) throw err
      
        res.send(rows)
    })    
}

exports.show = (req, res) => {
    connection.query(`SELECT * FROM houseslist WHERE id=${req.params.id}`, (err, rows)=> {
        if (err) throw err
      
        res.send(rows[0])
    })
}

exports.store = (req, res) => {
    const {User_ID, RentName,
         RentAddress, Town, latitude,
          longtitude, RentOwner,
           OwnerPhoneNumber,roomsTotal 
           ,roomsLeft, price, Image1, 
           Image2, Image3} = req.body    

           connection.query(`INSERT INTO houseslist (userid, rentname, rentadress, town, latitude, longtitude, rentowner, phonenumber,roomstotal ,roomsleft, price, image1, image2, image3) VALUES 
           ('${User_ID}', '${RentName}',  '${RentAddress}', '${Town}',  '${latitude}', '${longtitude}',  '${RentOwner}', '${OwnerPhoneNumber}','${roomsTotal}', '${roomsLeft}', '${price}', '${Image1}', '${Image2}', '${Image3}')`, (err)=> {
            if (err) throw err
        })     

    res.send({
        success: true,
        data: req.body
    })
}

exports.update = (req, res) => {
    const {User_ID, RentName,
        RentAddress, latitude,
         longtitude, RentOwner,
          OwnerPhoneNumber, roomsLeft, price, Image1, Image2, Image3} = req.body     
    const {id} = req.params
    connection.query(`UPDATE houseslist SET RentName='${RentName}', RentAddress='${RentAddress}', latitude='${latitude}', longtitude='${longtitude}', RentOwner='${RentOwner}', OwnerPhoneNumber='${OwnerPhoneNumber}', roomsLeft='${roomsLeft}', price='${price}', Image1='${Image1}', Image2='${Image2}', Image3='${Image3}' WHERE id=${id}`, (err) => {
        if (err) throw err
    })
    res.send({
        success: true,
        data: req.body
    })
}

exports.delete = (req, res) => {
    const {id} = req.params
    connection.query(`DELETE FROM houseslist WHERE id=${id}`, (err) => {
        if (err) throw err
    })
    res.send({
        success: true,
        data: req.body
    })
}