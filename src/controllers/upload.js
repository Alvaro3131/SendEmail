const multer = require('multer')

const storage = multer.diskStorage({
    filename: function (res, file, cb) {
        const ext = file.originalname.split(".").pop(); //TODO pdf / jpeg / mp3
        const fileName = Date.now(); //TODO 12312321321
        cb(null, `${fileName}.${ext}`); //TODO 123123213232.pdf
      },
      destination: function (res, file, cb) {
        cb(null, `./uploads`);
      },
})

const upload = multer({ storage: storage })

exports.upload = upload.single('myFile')

exports.uploadFile = (req, res) => {
    const file = req.file.filename;
    console.log(file)
    res.send({ data: "OK", url: `http://localhost:3000/${file}` });
}