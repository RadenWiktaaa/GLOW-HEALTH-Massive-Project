const db = require('../config/database')
const { use } = require('../routes/usersProfile')

const getUsers = (req, res) => {
    try {
        const sql = 'SELECT * FROM tb_profileusers'
        db.execute(sql, (err, data) => {
            res.json({
                status: true,
                message: 'Semua data berhasil diambil',
                data: data,
                method: req.method,
                url: req.url
            })
        })
    } catch (err) {
        res.json({
            status: false,
            method: req.method,
            url: req.url  
        })
    }
}


const createUsers = (req, res) => {
    const { nama, alamat, pendidikan, jenis_kelamin } = req.body;
    const query = "INSERT INTO tb_profileusers (nama, alamat, pendidikan, jenis_kelamin) VALUES (?,?,?,?)";
    db.query(query, [nama, alamat, pendidikan, jenis_kelamin], (err, result) => {
        try {
            res.json({
                status: true,
                message: 'Data berhasil ditambahkan',
                data: result,
                method: req.method,
                url: req.url
            }) 
        } catch (err) {
            console.log(err)
            res.status(500).json({
                status: false,
                message: 'Data gagal ditambah',
                method: req.method,
                url: req.url
            }) 
        }
       
    })
}


const updateUsers = (req, res) => {
    const { nama, alamat, pendidikan, jenis_kelamin } = req.body;
    const id = req.params.id;
    const query = "UPDATE tb_profileusers SET nama = ?, alamat = ?, pendidikan = ?, jenis_kelamin = ? WHERE id = ?";
    db.query(query, [nama, alamat, pendidikan, jenis_kelamin, id], (err, result) => {
        try {
            res.json({
                status: true,
                message: 'Data berhasil diperbaharui',
                data: result,
                method: req.method,
                url: req.url
            }) 
        } catch (error) {
            res.json({
                status: false,
                message: 'Data gagal diperbaharui',
                method: req.method,
                url: req.url
            }) 
        }
       
    })
}


const deleteUsers = (req, res) => {
    const id = req.params.id;
    const query = "DELETE FROM tb_profileusers WHERE id = ?"
    db.query(query, [id], (err, result) => {
        try {
            res.json({
                status: true,
                message: 'Data berhasil dihapus',
                data: result,
                method: req.method,
                url: req.url
            }) 
        } catch (error) {
            res.json({
                status: false,
                message: 'Data gagal dihapus',
                method: req.method,
                url: req.url
            }) 
        }
    })
}


module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
}