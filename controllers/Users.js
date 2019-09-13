const connection = require('../db')

exports.index = (req, res) => {
    connection.query('SELECT * FROM users', (err, rows)=> {
        if (err) throw err
      
        res.send(rows)
    })    
}

exports.show = (req, res) => {
    connection.query(`SELECT * FROM users WHERE id=${req.params.id}`, (err, rows)=> {
        if (err) throw err
      
        res.send(rows[0])
    })
}

exports.store = (req, res) => {
    const { email, password, name, gender, phoneNumber, job} = req.body    

    connection.query(`INSERT INTO users 
    (email, password, name, gender, phoneNumber, job) VALUES 
    ('${email}', '${password}', '${name}', '${gender}', '${phoneNumber}', '${job}')`, (err)=> {
        if (err) throw err
    })    

    res.send({
        success: true,
        data: req.body
    })
}

exports.update = (req, res) => {
    const {email, password, name, gender, phoneNumber, job} = req.body
    const {id} = req.params
    connection.query(`UPDATE users SET email='${email}', password=${password}, name='${name}', gender='${gender}', phoneNumber='${phoneNumber}', job='${job}' WHERE id=${id}`, (err) => {
        if (err) throw err
    })
    res.send({
        success: true,
        data: req.body
    })
}

exports.delete = (req, res) => {
    const {id} = req.params
    connection.query(`DELETE FROM users WHERE id=${id}`, (err) => {
        if (err) throw err
    })
    res.send({
        success: true,
        data: req.body
    })
}
exports.login = (req, res) => {

    connection.query(`SELECT * FROM users WHERE email='${req.params.email}' and password='${req.params.password}'`, (err, rows)=> {
        if (err) throw err
      
        res.send(rows[0])
    })
}