const express = require('express');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const router = express.Router();

const conn = mongoose.createConnection(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true  });
let gfs; 
conn.once('open', ()  => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});

const storage = new GridFsStorage({
    url: process.env.DB_CONNECTION,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if(err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
upload = multer({ storage});


router.get('/files', async(req, res) => {
    await gfs.files.find().toArray((err, files) => {

        if (!files || files.length === 0) {
            return res.status(404).json({
                err: '404 no files'
            });
        }
    
        return res.json(files);
    });
});

router.get('/files/:filename', async (req, res) => {
    await gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: '404 Nothing found'
            });
        }
        return res.json(file);
    });
});

router.get('/image/:filename', async (req, res) => {
    await gfs.files.findOne({ filename: req.params.filename }, async(err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            });
        }

        if (file.contentType === 'image/jpeg' || file.contentType === 'image/jpg' || file.contentType === 'image/png' || file.contentType === 'image/webp') {
            const readstream = await gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } 
        else {
            res.status(404).json({
                err: 'Not an image'
            });
        }
    });
});

module.exports = router;