import Photo from "../models/photoModel.js"; // import işlemi yaptığımız için .js i ekliyoruz

const createPhoto = async (req, res) => {

    try {

        const photo = await Photo.create(req.body);
        res.status(201).json({
            succeded: true,
            photo,
    });
        
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        });   
    }  
};

const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find({})// boş obje bütün fotoğrafları bulmayı sağlamak için
        res.status(200).json({
            succeded: true,
            photos
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        }); 
        
    }
}

export {createPhoto, getAllPhotos};