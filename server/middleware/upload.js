import multer from 'multer';
import path from 'path';



const upload = multer({
  dest: './uploads',
  fileFilter: (req, file, cb)=> {
   const extension = path.extname(file.originalname).toLowerCase();
   const mimetyp = file.mimetype;
   if (
       extension == '.jpg' ||
       extension == '.jpeg' ||
       extension == '.png' ||
       mimetyp == 'image/png' ||
       mimetyp == 'image/jpg' ||
       mimetyp == 'image/jpeg'
       
   ) {
       cb(null, true);
   }else{
    console.log('file must be photo or pdf!')
   }
 },
 limits:{
   fileSize: 1024*1024 *2  //2MB
 }
});

export const multipleUpload= multer({dest: './uploads'})

export default upload;
