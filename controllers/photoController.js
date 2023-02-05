import Photo from "../models/photoModel.js"; // import işlemi yaptığımız için .js i ekliyoruz

const createPhoto = (req, res) => {
    const photo = Photo.create(req.body);
    res.status(201).json({
        succeded: true,
        photo,
    });
};

export {createPhoto};