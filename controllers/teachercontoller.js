const teacherSchema = require('../models/teacher')

const getteachers = async(req, res) => {
    try {
        const teachers = await teacherSchema.find()
        if(teachers.length > 0){
            res.status(200).json({
                status: true,
                data: teachers,
                method: req.method,
                url: req.url
            })
        }else{
            res.json({
                status: false,
                message: "Data Masih Kosong"
            })
        }
    } catch (error) {
        res.status(400).json({sucess: false})
    }
}

const getbyid = async(req, res) => {
    try {
        const teachers = await teacherSchema.findById(req.params.id)
        res.status(200).json({
            status: true,
            data: teachers,
            method: req.method,
            url: req.url,
            message: "Data Berhasil Didapat"
        })
    } catch (error) {
        res.status(400).json({sucess: false})
    }
}

const addteachers = async(req, res) => {
    try {
        const teachers = await teacherSchema.create(req.body)
        res.status(200).json({
            status: true,
            data: teachers,
            method: req.method,
            url: req.url,
            message: "Data Berhasil Ditambahkan"
        })
    } catch (error) {
        res.status(400).json({sucess: false})
    }
}

const update = async(req, res) => {
    try {
        const teachers = await teacherSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: true,
            data: teachers,
            method: req.method,
            url: req.url,
            message: "Data Berhasil Diubah"
        })
    } catch (error) {
        res.status(400).json({sucess: false})
    }
}

const deleteteachers = async(req, res) => {
    try {
        const teachers = await teacherSchema.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: true,
            data: teachers,
            method: req.method,
            url: req.url,
            message: "Data Berhasil Dihapus"
        })
    } catch (error) {
        res.status(400).json({sucess: false})
    }
}

module.exports = {
    getteachers,
    getbyid,
    addteachers,
    update,
    deleteteachers
}